import { monthlyPrice } from '@/constants/other';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: monthlyPrice * 100,
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      setup_future_usage: 'off_session',
      metadata: {
        userId: user.id
      }
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
