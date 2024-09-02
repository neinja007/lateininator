import { prisma } from '@/utils/other/client';
import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';

export const GET = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const includedData = getIncludedData(request.nextUrl.searchParams.getAll('include[]'), ['collection', 'words']);
  const includedWordData = getIncludedData(request.nextUrl.searchParams.getAll('wordInclude[]'), [
    'noun',
    'verb',
    'adjective'
  ]);

  if (!includedData || !includedWordData) {
    return NextResponse.json({ error: 'Invalid include or wordInclude param' }, { status: 400 });
  }

  console.log(includedData, includedWordData);

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
      include: includedData.words && {
        words: {
          include: includedWordData
        }
      }
    });

    return NextResponse.json(lists, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
