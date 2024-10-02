import { NextRequest, NextResponse } from 'next/server';
import { getIncludedData } from '../../utils/getIncludedData';
import { getWordById } from './services/getWordById';
import { getWordsByQuery } from './services/getWordsByQuery';
import { getWords } from './services/getWords';
import { z } from 'zod';
import { currentUser } from '@clerk/nextjs/server';
import { wordSchema } from '@/schemas/word';
import { prisma } from '@/utils/other/client';
import { Comparison, Conjugation, Declension, Gender, Type } from '@prisma/client';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = z.nullable(z.string()).parse(searchParams.get('query'));
  const id = z.coerce.number().optional().parse(searchParams.get('id'));
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
      const word = await getWordById(id, includedDataObject);

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

export const PUT = async (request: NextRequest) => {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  const parsed = wordSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const word = parsed.data;

  if (Number(!!word.noun) + Number(!!word.verb) + Number(!!word.adjective) <= 1) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const rawWord = Object.assign(
    {},
    {
      name: word.name,
      type: word.type as Type,
      translation: word.translation,
      info: word.info
    }
  );

  const nounData =
    rawWord.type === 'NOUN' && word.noun
      ? Object.assign(
          {},
          {
            pluralOnly: word.noun.pluralOnly,
            declension: word.noun.declension as Declension,
            genitive: word.noun.genitive,
            gender: word.noun.gender as Gender
          }
        )
      : null;

  const verbData =
    rawWord.type === 'VERB' && word.verb
      ? Object.assign(
          {},
          {
            conjugation: word.verb.conjugation as Conjugation,
            present: word.verb.present,
            perfect: word.verb.perfect,
            participle: word.verb.participle
          }
        )
      : null;

  const adjectiveData =
    rawWord.type === 'ADJECTIVE' && word.adjective
      ? Object.assign(
          {},
          {
            comparison: word.adjective.comparison as Comparison,
            femininum: word.adjective.femininum,
            neutrum: word.adjective.neutrum
          }
        )
      : null;

  const derivativeId = word.derivativeId;

  try {
    const newWord = await prisma.word.create({
      data: {
        ...rawWord,
        createdBy: {
          connect: {
            id: user.id
          }
        },
        ...(nounData && { noun: { create: nounData } }),
        ...(verbData && { verb: { create: verbData } }),
        ...(adjectiveData && { adjective: { create: adjectiveData } }),
        ...(derivativeId && { derivative: { connect: { id: derivativeId } } })
      }
    });

    return NextResponse.json(newWord);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
