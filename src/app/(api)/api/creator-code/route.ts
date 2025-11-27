import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const creatorCode = z.string().parse(body.creatorCode);

  if (creatorCode !== process.env.CREATOR_CODE) {
    return NextResponse.json({ error: 'Invalid creator code' }, { status: 400 });
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
      usedCreatorCode: false
    }
  });
  if (!dbUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      points: {
        increment: 100
      },
      usedCreatorCode: true
    }
  });
  return NextResponse.json(updatedUser.points);
};

export const GET = async () => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id
    }
  });

  return NextResponse.json(dbUser?.usedCreatorCode);
};
