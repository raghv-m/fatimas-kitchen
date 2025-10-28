import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { generateReservationNumber } from '@/lib/utils';
import { sendReservationConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customer_name,
      customer_email,
      customer_phone,
      location_id,
      party_size,
      reservation_date,
      reservation_time,
      special_requests,
    } = body;

    // Validate required fields
    if (!customer_name || !customer_email || !customer_phone || !location_id || !party_size || !reservation_date || !reservation_time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const reservation_number = generateReservationNumber();

    // Create reservation
    const { data: reservation, error: reservationError } = await supabaseAdmin
      .from('reservations')
      .insert({
        reservation_number,
        customer_name,
        customer_email,
        customer_phone,
        location_id,
        party_size,
        reservation_date,
        reservation_time,
        special_requests,
        status: 'pending',
      })
      .select('*, location:locations(*)')
      .single();

    if (reservationError) throw reservationError;

    // Send confirmation email
    try {
      await sendReservationConfirmationEmail(reservation);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the reservation if email fails
    }

    return NextResponse.json({ 
      success: true, 
      reservation,
      message: 'Reservation created successfully' 
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const reservationId = searchParams.get('id');

    let query = supabaseAdmin
      .from('reservations')
      .select('*, location:locations(*)');

    if (reservationId) {
      query = query.eq('id', reservationId);
      const { data, error } = await query.single();
      if (error) throw error;
      return NextResponse.json({ data });
    }

    if (email) {
      query = query.eq('customer_email', email);
    }

    query = query.order('reservation_date', { ascending: false });

    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reservations' },
      { status: 500 }
    );
  }
}

