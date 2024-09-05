import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getUserById } from '../user/services/getUserById';
import { getStripeUserById } from './services/getStripeUserById';

export const GET = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return NextResponse.json({ status: 401, body: { message: 'Unauthorized' } });
  }

  const dbUser = await getUserById(clerkUser.id);

  if (!dbUser?.stripeCustomerId) {
    return NextResponse.json({ status: 404, body: { message: 'Stripe user not found' } });
  }

  try {
    const stripeUser = await getStripeUserById(dbUser?.stripeCustomerId);
    return NextResponse.json(stripeUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: { message: 'Internal server error' } });
  }
};
