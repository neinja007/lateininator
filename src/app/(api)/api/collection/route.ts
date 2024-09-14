import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';
import { collectionSchema } from '@/schemas/collectionSchema';

export const GET = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const saved: boolean = searchParams.get('saved') === 'true';
  const id: number = parseInt(searchParams.get('id') || '');

  const collectionIncludedDataObject = getIncludedData<['lists', 'owner', 'savedBy']>(
    searchParams.getAll('include[]'),
    ['lists', 'owner', 'savedBy']
  );
  const listIncludedDataObject = getIncludedData<['words']>(searchParams.getAll('listInclude[]'), ['words']);
  const wordIncludedDataObject = getIncludedData<['adjective', 'noun', 'verb', 'derivative', 'lists', 'base']>(
    searchParams.getAll('wordInclude[]'),
    ['adjective', 'noun', 'verb', 'derivative', 'lists', 'base']
  );

  if (!collectionIncludedDataObject || !listIncludedDataObject || !wordIncludedDataObject) {
    return NextResponse.json({ error: 'Invalid include param' }, { status: 400 });
  }

  const wordIncludedData = listIncludedDataObject?.words ? { include: wordIncludedDataObject } : undefined;
  const listIncludedData = collectionIncludedDataObject.lists ? { include: { words: wordIncludedData } } : undefined;
  const collectionIncludedData = { ...collectionIncludedDataObject, lists: listIncludedData };

  try {
    if (id) {
      const collection = await prisma.collection.findUnique({
        where: {
          id,
          OR: [{ ownerId: user.id }, { private: false }]
        },
        include: collectionIncludedData
      });

      return NextResponse.json(collection, { status: 200 });
    } else {
      const collections = await prisma.collection.findMany({
        where: {
          savedBy: saved
            ? {
                some: {
                  id: user.id
                }
              }
            : {
                none: {
                  id: user.id
                }
              },
          OR: [
            {
              private: false
            },
            {
              owner: {
                id: user.id
              }
            }
          ]
        },
        include: collectionIncludedData
      });
      return NextResponse.json(collections, { status: 200 });
    }
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

export const PATCH = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const collectionId = searchParams.get('id');

  if (!collectionId) {
    return NextResponse.json({ error: 'Missing collection id' }, { status: 400 });
  }

  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: parseInt(collectionId)
      },
      include: {
        savedBy: true,
        owner: true
      }
    });

    if (!collection) {
      return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
    }

    if (collection.savedBy.find((u) => u.id === user.id)) {
      return NextResponse.json({ error: 'Collection already saved' }, { status: 400 });
    }

    try {
      const updatedCollection = await prisma.collection.update({
        where: {
          id: parseInt(collectionId)
        },
        data: {
          savedBy: {
            connect: {
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
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  const parsed = collectionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const collection = parsed.data;

  const id = collection.id;
  const name = collection.name;
  const description = collection.description;
  const isPrivate = collection.private;
  const lists = collection.lists;

  let updatedCollection;

  if (id) {
    try {
      updatedCollection = prisma.collection.update({
        where: {
          id: id
        },
        data: {
          name,
          description,
          private: isPrivate
        }
      });

      return NextResponse.json(updatedCollection, { status: 200 });
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  } else {
    updatedCollection = await prisma.collection.create({
      data: {
        name,
        description,
        private: isPrivate,
        owner: {
          connect: {
            id: user.id
          }
        },
        savedBy: {
          connect: {
            id: user.id
          }
        }
      }
    });
  }
  try {
    for (const list of lists) {
      if (!list.id) {
        await prisma.list.create({
          data: {
            name: list.name,
            words: {
              connect: list.words.map((word) => ({ id: word }))
            },
            collection: {
              connect: {
                id: updatedCollection.id
              }
            }
          }
        });
      } else {
        await prisma.list.update({
          where: {
            id: list.id
          },
          data: {
            name: list.name,
            words: {
              connect: list.words.map((word) => ({ id: word }))
            }
          }
        });
      }
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  return NextResponse.json(updatedCollection, { status: 200 });
};
