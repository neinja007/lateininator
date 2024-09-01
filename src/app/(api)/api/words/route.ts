import { prisma } from '@/utils/other/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  // give me a regex that checks if a string is only alphabetical, but it also returns true if there are no characters (empty string)

  if (query !== null && !/^[a-zA-Z]*$/.test(query)) {
    return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
  }

  if (query) {
    try {
      const words = await prisma.word.findMany({
        where: {
          name: {
            contains: query,
            mode: 'insensitive'
          }
        }
      });

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    try {
      const words = await prisma.word.findMany();

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
