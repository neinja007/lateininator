import { prisma } from '@/utils/other/client';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const id = searchParams.get('id');
  const includedDataObject = getIncludedData(searchParams.getAll('include[]'), [
    'adjective',
    'noun',
    'verb',
    'derivative',
    'lists',
    'base'
  ]);

  if (!includedDataObject) {
    return NextResponse.json({ error: 'Invalid include param' }, { status: 400 });
  }

  if (query && id) {
    return NextResponse.json({ error: 'Invalid searchParams (cannot read both id and query)' }, { status: 400 });
  }

  if (id !== null && !/^\d+$/.test(id)) {
    return NextResponse.json({ error: 'Invalid id (must be number)' }, { status: 400 });
  }

  if (query !== null && !/^[a-zA-Z]+$/.test(query)) {
    return NextResponse.json({ error: 'Invalid query (must be string)' }, { status: 400 });
  }

  if (query) {
    try {
      const words = await prisma.word.findMany({
        where: {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        },
        include: includedDataObject
      });

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else if (id) {
    try {
      const word = await prisma.word.findUnique({
        where: {
          id: parseInt(id)
        },
        include: includedDataObject
      });

      if (!word) {
        return NextResponse.json({ error: 'Word not found' }, { status: 404 });
      }

      return NextResponse.json(word);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    try {
      const words = await prisma.word.findMany({
        include: includedDataObject
      });

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
