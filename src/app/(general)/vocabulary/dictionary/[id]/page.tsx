'use client';
import Header from './components/Header';
import WordInformation from './components/WordInformation';
import TableInformation from './components/TableInformation';
import VerbTable from './components/tables/VerbTable';
import AdjectiveTable from './components/tables/AdjectiveTable';
import Hr from '@/components/Hr';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { MainWordType } from '@/types/appConstants';
import NounTable from './components/tables/NounTable';
import axios from 'axios';
import { Word } from '@/types/word';
import { isNoun } from '@/utils/typeguards/isNoun';
import { isVerb } from '@/utils/typeguards/isVerb';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import { useQuery } from '@tanstack/react-query';
import BackToDictionaryButton from './components/BackToDictionaryButton';
import FailToLoad from '@/components/FailToLoad';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
  const {
    data: word,
    error,
    status
  } = useQuery<Word>({
    queryKey: ['words', id],
    queryFn: ({ queryKey }) =>
      axios
        .get('/api/words', { params: { id: queryKey[1], include: ['derivative', 'noun', 'verb', 'adjective'] } })
        .then((res) => res.data)
  });

  if (status === 'error')
    return (
      <div className='space-y-5'>
        <BackToDictionaryButton />
        <FailToLoad />
      </div>
    );

  if (status === 'pending')
    return (
      <div className='grid grid-cols-3 items-center'>
        <BackToDictionaryButton />
        <div className='inline animate-pulse text-center'>Wort wird geladen...</div>
      </div>
    );

  return (
    <div className='space-y-3'>
      <Header word={word} />
      <Hr />
      <WordInformation word={word} />
      {APP_CONSTANTS.mainWordTypes.includes(word.type as MainWordType) && (
        <>
          <Hr />
          <TableInformation word={word} />
          {isNoun(word) ? (
            <NounTable word={word} />
          ) : isVerb(word) ? (
            <VerbTable word={word} />
          ) : isAdjective(word) ? (
            <AdjectiveTable word={word} />
          ) : (
            false
          )}
        </>
      )}
    </div>
  );
};

export default Page;
