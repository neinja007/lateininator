import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedDataObject } from '../../utils/getIncludedDataObject';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const GET = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const includedDataObject = getIncludedDataObject<Prisma.ListInclude<DefaultArgs>>(
    request.nextUrl.searchParams.getAll('include[]'),
    ['collection', 'words']
  );

  if (!includedDataObject) {
    return NextResponse.json({ error: 'Invalid include param' }, { status: 400 });
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
      },
      include: includedDataObject
    });

    return NextResponse.json(lists, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
