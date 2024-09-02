import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const lists = await prisma.list.findMany({
      where: {
        collection: {
          savedBy: {
            some: {
              id: user.id
            }
          }
        }
      }
    });

    return NextResponse.json(lists, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
