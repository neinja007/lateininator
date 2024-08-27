import { prisma } from '@/utils/other/client';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: NextRequest) => {
  console.log('Stripe webhook received!');

  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

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
    console.error(`Webhook signature verification failed.` /*err.message*/);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      {
        const paymentIntent = event.data.object;
        console.log('PaymentIntent was successful!', paymentIntent);

        const userId = paymentIntent.metadata.userId;
        if (!userId) {
          console.error('No userId found in metadata!');
          return NextResponse.json({ error: 'No userId found in metadata!' }, { status: 400 });
        }

        let state = 'error';
        try {
          await prisma.user.update({
            where: { id: userId },
            data: { premium: true }
          });
          state = 'success';
        } catch (error: any) {
          console.error(error);
          redirect('/premium/success?state=error');
        }

        redirect('/premium/success?state=' + state);
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
