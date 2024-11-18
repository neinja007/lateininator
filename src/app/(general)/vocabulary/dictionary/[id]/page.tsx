'use client';
import { use } from 'react';
import Header from './components/Header';
import WordInformation from './components/WordInformation';
import TableInformation from './components/TableInformation';
import VerbTable from './components/tables/VerbTable';
import AdjectiveTable from './components/tables/AdjectiveTable';
import Hr from '@/components/Hr';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { MainWordType } from '@/types/appConstants';
import NounTable from './components/tables/NounTable';
import { isNoun } from '@/utils/typeguards/isNoun';
import { isVerb } from '@/utils/typeguards/isVerb';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import BackToDictionaryButton from './components/BackToDictionaryButton';
import Skeleton from '@/components/Skeleton';
import { useWords } from '@/hooks/database/queries/useWords';
import { Word } from '@/types/word';
import WordNotFound from './components/WordNotFound';

type PageProps = { params: Promise<{ id: string }> };

const Page = (props: PageProps) => {
  const params = use(props.params);

  const { id } = params;

  const { data: word, status } = useWords<Word>({
    id: parseInt(id),
    include: ['derivative', 'noun', 'verb', 'adjective']
  });

  if (status === 'error')
    return (
      <div className='space-y-5'>
        <BackToDictionaryButton />
        <WordNotFound />
      </div>
    );

  return (
    <div className='space-y-3'>
      {status === 'success' && word ? (
        <>
          <Header word={word} />
          <WordInformation word={word} />
        </>
      ) : (
        <>
          <Skeleton pulse customSize className='h-16 w-full' />
        </>
      )}
      {status === 'success' && word ? (
        APP_CONSTANTS.mainWordTypes.includes(word.type as MainWordType) && (
          <>
            <Hr />
            <TableInformation word={word} />
            {isNoun(word) && word.noun.declension !== 'NONE' && word.noun.gender !== 'NONE' ? (
              <NounTable word={word} />
            ) : isVerb(word) && word.verb.conjugation !== 'NONE' ? (
              <VerbTable word={word} />
            ) : isAdjective(word) && word.adjective.comparison !== 'NONE' ? (
              <AdjectiveTable word={word} />
            ) : (
              false
            )}
          </>
        )
      ) : (
        <>
          <Hr />
          <TableInformation word={undefined} loading />
          <Skeleton pulse customSize className='h-64 w-full' />
        </>
      )}
    </div>
  );
};

export default Page;
