import { prisma } from '@/utils/other/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const id = searchParams.get('id');
  const include = searchParams.getAll('include[]');

  if (!include.every((param) => ['adjective', 'noun', 'verb', 'derivative'].includes(param))) {
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

  const inclusionObject = {
    adjective: include.includes('adjective'),
    noun: include.includes('noun'),
    verb: include.includes('verb'),
    derivative: include.includes('derivative')
  };

  if (query) {
    try {
      const words = await prisma.word.findMany({
        where: {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        },
        include: inclusionObject
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
        include: inclusionObject
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
        include: inclusionObject
      });

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
