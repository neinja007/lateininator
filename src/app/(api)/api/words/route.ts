import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';
import { validateNumber } from '../../utils/validateNumber';
import { validateString } from '../../utils/validateString';
import { getWordById } from './services/getWordById';
import { getWordsByQuery } from './services/getWordsByQuery';
import { getWords } from './services/getWords';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const id = searchParams.get('id');
  const includedDataObject = getIncludedData<['adjective', 'noun', 'verb', 'derivative', 'lists', 'base']>(
    searchParams.getAll('include[]'),
    ['adjective', 'noun', 'verb', 'derivative', 'lists', 'base']
  );

  if (!includedDataObject) {
    return NextResponse.json({ error: 'Invalid include param' }, { status: 400 });
  }

  if (query && id) {
    return NextResponse.json({ error: 'Invalid searchParams (cannot read both id and query)' }, { status: 400 });
  }

  if (!validateNumber(id)) {
    return NextResponse.json({ error: 'Invalid id (must be number)' }, { status: 400 });
  }

  if (!validateString(query)) {
    return NextResponse.json({ error: 'Invalid query (must be string)' }, { status: 400 });
  }

  if (query) {
    try {
      const words = await getWordsByQuery(query, includedDataObject);

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else if (id) {
    try {
      const word = await getWordById(parseInt(id), includedDataObject);

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
      const words = await getWords(includedDataObject);

      return NextResponse.json(words);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
