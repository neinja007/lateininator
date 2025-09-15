import { prisma } from '@/utils/other/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const users = await prisma.user.findMany({
    where: {
      doNotShowInLeaderboard: false
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });

  const publicUsers = users.map((user) => ({
    updatedAt: user.updatedAt,
    name: user.name,
    id: user.id,
    staff: user.staff
  }));

  return NextResponse.json(publicUsers);
};
