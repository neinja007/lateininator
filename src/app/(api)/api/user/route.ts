import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';

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
    const user = await prisma.user.findUnique({ where: { id: clerkUser.id }, include: includedDataObject });
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

    const userExists = await prisma.user.findUnique({
      where: { id: user.id }
    });

    if (userExists) {
      return NextResponse.json(userExists, { status: 200 });
    }

    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: emailAddress,
        name: user.fullName
      }
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ status: 500, body: { message: error } });
  }
};
