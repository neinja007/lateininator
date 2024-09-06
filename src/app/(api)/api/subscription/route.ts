import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '../user/services/getUserById';
import { updateUser } from './services/updateUser';

export const GET = async () => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser?.stripeCustomerId) {
    return NextResponse.json({ message: 'Stripe customer not found' }, { status: 404 });
  }

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: dbUser.stripeCustomerId
    });

    if (subscriptions.data.length > 1) {
      console.error(
        'Multiple subscriptions found (' + subscriptions.data.length + '), cancelling all of them but one.'
      );
      for (const subscription of subscriptions.data.slice(1)) {
        await stripe.subscriptions.cancel(subscription.id);
      }
    } else if (subscriptions.data.length === 0) {
      console.error('Subscription not found');
      return NextResponse.json({ message: 'Subscription not found' }, { status: 404 });
    }

    const subscription = subscriptions.data[0];

    return NextResponse.json({ data: subscription }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};

export const PATCH = async (request: NextRequest) => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser?.stripeCustomerId) {
    return NextResponse.json({ message: 'Stripe customer not found' }, { status: 404 });
  }

  const body = await request.json();
  const cancel = body.cancel;

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  let subscriptionId;

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: dbUser.stripeCustomerId
    });

    if (subscriptions.data.length > 1) {
      console.error(
        'Multiple subscriptions found (' + subscriptions.data.length + '), cancelling all of them but one.'
      );
      for (const subscription of subscriptions.data.slice(1)) {
        await stripe.subscriptions.cancel(subscription.id);
      }
    } else if (subscriptions.data.length === 0) {
      console.error('Subscription not found');
      return NextResponse.json({ message: 'Subscription not found' }, { status: 404 });
    }

    subscriptionId = subscriptions.data[0].id;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }

  if (cancel) {
    try {
      await stripe.subscriptions.cancel(subscriptionId);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  } else {
    try {
      await stripe.subscriptions.resume(subscriptionId);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  }

  await updateUser(user.id, { premium: cancel ? false : true });

  return NextResponse.json({ message: 'Subscription updated' }, { status: 200 });
};
