'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Badge from '@/components/Badge';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import clsx from 'clsx';
import Skeleton from '@/components/Skeleton';

type WordCardProps = {
  word: Word;
  query?: string;
  loading: boolean;
};

const WordCard = ({ word, query, loading }: WordCardProps) => {
  const router = useRouter();

  let highlightedWord: React.ReactNode = <span>{word.name}</span>;
  if (query !== '' && query) {
    const indexOfQuery = word.name.indexOf(query);
    highlightedWord = (
      <span>
        {word.name.slice(0, indexOfQuery)}
        <span className='text-blue-500'>{query}</span>
        {word.name.slice(indexOfQuery + query.length)}
      </span>
    );
  }

  let lexicalForm = getLexicalForm(word);

  return (
    <div
      className={clsx(
        'flex select-none flex-col overflow-hidden rounded-lg border border-gray-300 text-left shadow transition-colors selection:bg-gray-100 dark:border-gray-900 dark:bg-gray-900',
        !loading &&
          'cursor-pointer hover:border-blue-300 hover:bg-gray-200 hover:dark:border-blue-700 dark:hover:bg-gray-800'
      )}
      onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
    >
      <div className='p-2 px-3'>
        <div className='float-end m-1'>{!loading && <Badge text={MAPPER.extended.type.singular[word.type]} />}</div>
        <div className='line-clamp-1 h-8 text-2xl'>
          {loading ? <Skeleton customSize className='h-7 w-32' pulse /> : highlightedWord}
        </div>
        <div className='h-6'>{loading ? <Skeleton customSize className='h-full w-14' pulse /> : lexicalForm}</div>
        <br />
        <div className='h-6'>
          {loading ? (
            <Skeleton customSize className='h-6 w-44' pulse />
          ) : word.translation.length > 0 ? (
            word.translation.join(', ')
          ) : (
            'Keine Übersetzung'
          )}
        </div>
      </div>
      <div
        className={clsx(
          'mt-auto w-full bg-blue-200 p-2 px-3 text-center dark:bg-blue-950',
          loading && 'text-gray-500 dark:text-gray-700'
        )}
      >
        Wort ansehen <ChevronRight size={16} className='inline' />
      </div>
    </div>
  );
};

export default WordCard;
