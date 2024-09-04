import { prisma } from '@/utils/other/client';
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
    console.error('Webhook signature verification failed.');
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object as Stripe.Invoice;

    const customer = invoice.customer as string;

    if (!customer) {
      console.error('No customer found in invoice!');
      return NextResponse.json({ error: 'No customer found in invoice!' }, { status: 400 });
    }

    try {
      await prisma.user.update({
        where: { stripeCustomerId: customer },
        data: { premium: true }
      });
      console.log('User updated successfully!');
    } catch (error: any) {
      console.error(error);
    }
  } else if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription;
    const metadata = subscription.metadata;
    const userId = metadata && metadata.userId;
    console.log('Subscription deleted!', subscription);

    if (!userId) {
      console.error('No userId found in metadata!');
      return NextResponse.json({ error: 'No userId found in metadata!' }, { status: 400 });
    }

    try {
      await prisma.user.update({
        where: { id: userId },
        data: { premium: false }
      });
      console.log('User updated successfully!');
    } catch (error: any) {
      console.error(error);
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
};
