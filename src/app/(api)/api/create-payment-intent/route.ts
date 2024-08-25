import { monthlyPrice } from '@/constants/other';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: monthlyPrice * 100,
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      setup_future_usage: 'off_session'
    });

    return NextResponse.json(
      {
        clientSecret: paymentIntent.client_secret
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        error: error.message
      },
      { status: 500 }
    );
  }
}
