import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1PrBILHpe3r6P0xS0lKog7X6',
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.HOST_URL}/premium/success`,
      cancel_url: `${process.env.HOST_URL}/premium/overview`,
      metadata: {
        userId: user.id
      }
    });

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error: any) {
    console.error('Error creating Checkout Session:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
