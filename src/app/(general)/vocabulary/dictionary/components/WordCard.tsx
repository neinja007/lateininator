'use client';

import { Word } from '@/types';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';
import Badge from '@/components/Badge';
import { getLexicalForm } from '@/utils/wordUtils';
import { capitalizeFirstLetter } from '@/utils/inputUtils';

type WordCardProps = {
  word: Word;
  query?: string;
};

const WordCard = ({ word, query }: WordCardProps) => {
  const router = useRouter();

  let highlightedWord: React.ReactNode = <span>{word.word}</span>;
  if (query !== '' && query) {
    const indexOfQuery = word.word.indexOf(query);
    highlightedWord = (
      <span>
        {word.word.slice(0, indexOfQuery)}
        <span className='text-blue-500'>{query}</span>
        {word.word.slice(indexOfQuery + query.length)}
      </span>
    );
  }

  let lexicalForm = getLexicalForm(word);

  return (
    <div
      className='flex cursor-pointer select-none flex-col rounded-lg border text-left hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-800'
      onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
    >
      <div className='p-2 px-3'>
        <div className='float-end m-1'>
          <Badge text={word.type} />
        </div>
        <p className='line-clamp-1 text-2xl'>{highlightedWord}</p>
        <p>{lexicalForm ? lexicalForm : <br />}</p>
        <br />
        <p>{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}</p>
      </div>
      <div className='mt-auto w-full rounded-b-lg bg-blue-200 p-2 px-3 text-center dark:bg-blue-900'>
        Wort ansehen <ChevronRight size={16} className='inline' />
      </div>
    </div>
  );
};

export default WordCard;
