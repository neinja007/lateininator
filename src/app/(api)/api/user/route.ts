import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';
import { createUser } from './services/createUser';
import { getUserById } from './services/getUserById';
import { z } from 'zod';
import { prisma } from '@/utils/other/client';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const GET = async (request: NextRequest) => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return NextResponse.json({ status: 401, body: { message: 'Unauthorized' } });
  }

  const includedDataObject = getIncludedData(request.nextUrl.searchParams.getAll('include[]'), [
    'ownedCollections',
    'savedCollections'
  ]);

  if (!includedDataObject) {
    return NextResponse.json({ status: 400, body: { message: 'Invalid include param' } });
  }

  try {
    const user = await getUserById(clerkUser.id, includedDataObject);
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const POST = async () => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ status: 401, body: { message: 'Unauthorized' } });
  }

  try {
    const emailAddress = user.primaryEmailAddress?.emailAddress || user.emailAddresses[0].emailAddress;

    if (!emailAddress || !user.fullName) {
      console.error('Email or username not found');
      return NextResponse.json({ status: 400, body: { message: 'Email or username not found' } });
    }

    const userExists = await getUserById(user.id);

    if (userExists) {
      return NextResponse.json(userExists, { status: 200 });
    }

    let customerId: string;

    try {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName + ' ' + user.lastName,
        metadata: { userId: user.id }
      });

      customerId = customer.id;
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ status: 500, body: { message: error } });
    }

    const newUser = await createUser(user.id, emailAddress, user.fullName, customerId);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ status: 500, body: { message: error } });
  }
};

export const PATCH = async (request: NextRequest) => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ status: 401, body: { message: 'Unauthorized' } });
  }

  const body = await request.json();

  const name = z.string().min(1).parse(body.name);

  if (!name) {
    return NextResponse.json({ status: 400, body: { message: 'Name is required' } });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      name: name
    }
  });

  await clerkClient().users.updateUser(user.id, {
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1] || ' '
  });

  return NextResponse.json(updatedUser, { status: 200 });
};
