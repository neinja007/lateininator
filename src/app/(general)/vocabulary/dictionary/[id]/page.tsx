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
import { isNoun } from '@/utils/typeguards/isNoun';
import { isVerb } from '@/utils/typeguards/isVerb';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import BackToDictionaryButton from './components/BackToDictionaryButton';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { useWords } from '@/hooks/database/useWords';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
  const { word, status } = useWords(parseInt(id), ['derivative', 'noun', 'verb', 'adjective']);

  if (status === 'error')
    return (
      <div className='space-y-5'>
        <BackToDictionaryButton />
        <FailToLoad />
      </div>
    );

  return (
    <div className='space-y-3'>
      {status === 'success' ? (
        <>
          <Header word={word!} loading={false} />
          <Hr />
          <WordInformation word={word!} />
        </>
      ) : (
        <>
          <Header word={undefined} loading={true} />
          <Hr />
          <Skeleton pulse customSize className='h-8 w-full' />
        </>
      )}
      {status === 'success' ? (
        APP_CONSTANTS.mainWordTypes.includes(word!.type as MainWordType) && (
          <>
            <Hr />
            <TableInformation word={word!} />
            {isNoun(word!) ? (
              <NounTable word={word!} />
            ) : isVerb(word!) ? (
              <VerbTable word={word!} />
            ) : isAdjective(word!) ? (
              <AdjectiveTable word={word!} />
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
