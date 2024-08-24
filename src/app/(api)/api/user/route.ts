import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export const POST = async () => {
  const user = await currentUser();
  if (!user) {
    console.error('Unauthorized user');
    return NextResponse.json({ status: 401, body: { message: 'Unauthorized' } });
  }

  try {
    const emailAdress = user.primaryEmailAddress?.emailAddress || user.emailAddresses[0].emailAddress;

    if (!emailAdress || !user.fullName) {
      console.error('Email or username not found');
      return NextResponse.json({ status: 400, body: { message: 'Email or username not found' } });
    }

    const userExists = await prisma.user.findUnique({
      where: { email: emailAdress }
    });

    if (userExists) {
      return NextResponse.json(userExists, { status: 200 });
    }

    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: emailAdress,
        name: user.fullName
      }
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ status: 500, body: { message: error } });
  }
};
