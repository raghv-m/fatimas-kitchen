import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { generateOrderNumber } from '@/lib/utils';
import { sendOrderConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customer_name,
      customer_email,
      customer_phone,
      delivery_address,
      delivery_city,
      delivery_postal_code,
      delivery_instructions,
      location_id,
      items,
      subtotal,
      tax,
      delivery_fee,
      total,
      payment_method,
    } = body;

    // Validate required fields
    if (!customer_name || !customer_email || !customer_phone || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const order_number = generateOrderNumber();

    // Create order
    const { data: order, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        delivery_address,
        delivery_city,
        delivery_postal_code,
        delivery_instructions,
        location_id,
        subtotal,
        tax,
        delivery_fee,
        total,
        payment_method,
        status: 'pending',
        payment_status: 'pending',
        estimated_delivery_time: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hour from now
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // Create order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      menu_item_id: item.menu_item_id,
      item_name: item.item_name,
      quantity: item.quantity,
      unit_price: item.unit_price,
      total_price: item.total_price,
      special_instructions: item.special_instructions,
    }));

    const { error: itemsError } = await supabaseAdmin
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // Send confirmation email
    try {
      await sendOrderConfirmationEmail(order, orderItems);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the order if email fails
    }

    return NextResponse.json({ 
      success: true, 
      order,
      message: 'Order placed successfully' 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const orderId = searchParams.get('id');

    let query = supabaseAdmin
      .from('orders')
      .select('*, items:order_items(*), location:locations(*)');

    if (orderId) {
      query = query.eq('id', orderId);
      const { data, error } = await query.single();
      if (error) throw error;
      return NextResponse.json({ data });
    }

    if (email) {
      query = query.eq('customer_email', email);
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

