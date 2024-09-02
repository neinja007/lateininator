'use client';
import Badge from '@/components/Badge';
import { useRouter } from 'next/navigation';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import { ChevronRight, ChevronsRight } from 'lucide-react';
import clsx from 'clsx';
import Skeleton from '@/components/Skeleton';

type WordRowProps = {
  word: Word;
  query?: string;
  loading: boolean;
};

const WordRow = ({ word, query, loading }: WordRowProps) => {
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

  return (
    <tr
      className={clsx(
        'group select-none border-t transition-colors dark:border-gray-500',
        !loading && 'cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-950'
      )}
      onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
    >
      <td className='p-2 px-4'>
        {loading ? <Skeleton customSize className='h-6 w-32' pulse /> : highlightedWord} <i>{getLexicalForm(word)}</i>
      </td>
      <td className='line-clamp-1 p-2 px-4'>
        {loading ? (
          <div className='flex h-6'>
            <Skeleton pulse />, <Skeleton className='ml-2' pulse />
          </div>
        ) : word.translation.length > 0 ? (
          word.translation.join(', ')
        ) : (
          'Keine Übersetzung'
        )}
      </td>
      <td className='p-2 px-4'>
        {loading ? (
          <Skeleton customSize className='h-6 w-20' pulse />
        ) : (
          <Badge text={MAPPER.extended.type[word.type]} />
        )}
      </td>
      <td className='p-2 px-4'>
        <div
          className={clsx('float-end flex items-center', loading && 'animate-pulse text-gray-400 dark:text-gray-600')}
        >
          Wort ansehen
          <ChevronRight size={16} className='ml-1 w-4 transition-all group-hover:m-0 group-hover:w-0' />
          <ChevronsRight size={16} className='m-0 w-0 transition-all group-hover:ml-1 group-hover:w-4' />
        </div>
      </td>
    </tr>
  );
};

export default WordRow;
