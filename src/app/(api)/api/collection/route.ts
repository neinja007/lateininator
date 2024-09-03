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

export const DELETE = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const collectionId: number = parseInt(searchParams.get('id') || '');

  if (!collectionId) {
    return NextResponse.json({ error: 'Missing collection id' }, { status: 400 });
  }

  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId
      },
      include: {
        savedBy: true,
        owner: true
      }
    });

    if (!collection) {
      return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
    }

    if (collection.owner.id === user.id) {
      try {
        const deletedCollection = await prisma.collection.delete({
          where: {
            id: collectionId,
            owner: {
              id: user.id
            }
          }
        });

        return NextResponse.json(deletedCollection, { status: 200 });
      } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    } else if (collection.savedBy.find((u) => u.id === user.id)) {
      try {
        const updatedCollection = await prisma.collection.update({
          where: {
            id: collectionId
          },
          data: {
            savedBy: {
              disconnect: {
                id: user.id
              }
            }
          }
        });

        return NextResponse.json(updatedCollection, { status: 200 });
      } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
