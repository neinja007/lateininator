import { currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';
import { getLists } from './services/getLists';

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

  try {
    const lists = await getLists(user.id, includedData, includedWordData);

    return NextResponse.json(lists, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
