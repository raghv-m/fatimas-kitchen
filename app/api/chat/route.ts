import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { supabaseAdmin } from '@/lib/supabase/client';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful AI assistant for Fatima Karahi Corner, the best Karahi restaurant in Calgary and Edmonton. 

BUSINESS INFORMATION:
- Name: Fatima Karahi Corner
- Tagline: Best Karahi Restaurant in Calgary. Elegant & Famous.
- Mission: Delivering excellent food and hospitality
- Specialties: Karahi, curry dishes, BBQ, veggie dishes, desserts, rice dishes, bread, and drinks
- Signature Dish: Fatima Special Karahi

LOCATIONS:
Calgary:
- Address: 55 Castleridge Blvd NE #76, Calgary, AB T3J 3J8, Canada
- Phone: +1 403-280-0009
- Hours: Monday-Thursday: 4:00 PM - 11:00 PM, Friday-Sunday: 3:00 PM - 11:00 PM

Edmonton:
- Address: 10680 Ellerslie Rd SW, Edmonton, AB T6W 0C3, Canada
- Phone: +1 780-705-5000
- Hours: Monday: Closed, Tuesday-Sunday: 5:00 PM - 10:00 PM

Email: fatimakarahi@gmail.com

SERVICES:
- Fast delivery within 1 hour
- Online ordering available
- Table reservations
- Dine-in and takeout
- Mobile app available

YOUR ROLE:
1. Answer questions about the restaurant, menu, hours, and locations
2. Help customers make reservations (collect: name, email, phone, location, date, time, party size, special requests)
3. Assist with online orders
4. Provide menu recommendations
5. Handle customer inquiries professionally and warmly

When helping with reservations, collect all necessary information step by step. Be friendly, professional, and enthusiastic about the restaurant's food and service.`;

export async function POST(request: Request) {
  try {
    const { messages, sessionId } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      return NextResponse.json({
        message: "I'm currently in demo mode. To enable the AI chatbot, please configure your OpenAI API key in the .env.local file. For now, please call us at +1 403-280-0009 (Calgary) or +1 780-705-5000 (Edmonton) for assistance!",
        sessionId: sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      });
    }

    // Get or create conversation
    let conversationId = null;
    if (sessionId) {
      const { data: existingConversation } = await supabaseAdmin
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .single();

      if (existingConversation) {
        conversationId = existingConversation.id;
      }
    }

    if (!conversationId) {
      const newSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      const { data: newConversation } = await supabaseAdmin
        .from('chat_conversations')
        .insert({ session_id: newSessionId })
        .select()
        .single();

      conversationId = newConversation?.id;
    }

    // Save user message
    const userMessage = messages[messages.length - 1];
    if (conversationId && userMessage.role === 'user') {
      await supabaseAdmin.from('chat_messages').insert({
        conversation_id: conversationId,
        role: 'user',
        content: userMessage.content,
      });
    }

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0].message.content;

    // Save assistant message
    if (conversationId && assistantMessage) {
      await supabaseAdmin.from('chat_messages').insert({
        conversation_id: conversationId,
        role: 'assistant',
        content: assistantMessage,
      });
    }

    return NextResponse.json({
      message: assistantMessage,
      sessionId: sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

