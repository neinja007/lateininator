import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getUserById } from '../user/services/getUserById';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  try {
    let existingCustomer;

    if (dbUser.stripeCustomerId) {
      existingCustomer = await stripe.customers.retrieve(dbUser.stripeCustomerId);
    }

    if (!existingCustomer) {
      existingCustomer = await stripe.customers.create({
        metadata: {
          userId: user.id
        }
      });
    }

    const subscription = await stripe.subscriptions.create({
      customer: existingCustomer.id,
      items: [{ price: 'price_1PrBILHpe3r6P0xS0lKog7X6' }],
      trial_period_days: 7,
      payment_behavior: 'default_incomplete',
      metadata: {
        userId: user.id
      }
    });

    return NextResponse.json(
      {
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscription.id
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
