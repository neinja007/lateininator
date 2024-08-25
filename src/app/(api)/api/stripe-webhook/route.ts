// app/api/stripe-webhook/route.js

import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: NextRequest) => {
  console.log('Stripe webhook received!');

  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let event;

  try {
    if (!sig) {
      console.error('No signature found in headers!');
      return NextResponse.json({ error: 'No signature found in headers!' }, { status: 400 });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not set!');
      return NextResponse.json({ error: 'STRIPE_WEBHOOK_SECRET is not set!' }, { status: 500 });
    }

    event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed.`, err.message);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      {
        const paymentIntent = event.data.object;
        console.log('PaymentIntent was successful!', paymentIntent);

        try {
          await prisma.user.update({ where: { id: user.id }, data: { premium: true } });
        } catch (error: any) {
          console.error(error);
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
      }
      break;
    case 'payment_intent.payment_failed':
      {
        const failedPaymentIntent = event.data.object;
        console.log('PaymentIntent failed', failedPaymentIntent);
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
};
