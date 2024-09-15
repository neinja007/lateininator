import { currentUser } from '@clerk/nextjs/server';
import { getUserById } from '../user/services/getUserById';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/utils/other/client';

export const GET = async () => {
  const user = await currentUser();

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return new Response('User not found', { status: 404 });
  }

  return NextResponse.json(dbUser.points);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const points = z.number().parse(body.points);
  const method = z.enum(['increment', 'set']).parse(body.method);

  const user = await currentUser();

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      points: {
        [method]: points
      }
    }
  });

  return NextResponse.json(updatedUser.points);
};
