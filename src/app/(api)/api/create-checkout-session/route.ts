import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  if (!process.env.NEXT_PUBLIC_ENABLE_PREMIUM) {
    return NextResponse.json({ error: 'Premium is not enabled' }, { status: 400 });
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { stripeCustomerId: true }
    });

    if (!dbUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    let customerId: string;

    if (!dbUser.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName + ' ' + user.lastName,
        metadata: { userId: user.id }
      });

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: customer.id }
      });

      customerId = customer.id;
    } else {
      customerId = dbUser.stripeCustomerId;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PREMIUM_PRICE_ID,
          quantity: 1
        }
      ],
      subscription_data: {
        trial_period_days: 7
      },
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/premium/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/premium/overview`,
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
