import { prisma } from '@/utils/other/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      points: 'desc'
    }
  });

  const publicUsers = users.map((user) => ({
    points: user.points,
    name: user.name,
    id: user.id,
    staff: user.staff
  }));

  return NextResponse.json(publicUsers);
};
