import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';

export const GET = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const includedDataObject = getIncludedData(request.nextUrl.searchParams.getAll('include[]'), [
    'lists',
    'owner',
    'savedBy'
  ]);

  if (!includedDataObject) {
    return NextResponse.json({ error: 'Invalid include param' }, { status: 400 });
  }

  try {
    const collections = await prisma.collection.findMany({
      where: {
        savedBy: {
          some: {
            id: user.id
          }
        }
      },
      include: includedDataObject
    });

    return NextResponse.json(collections, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
