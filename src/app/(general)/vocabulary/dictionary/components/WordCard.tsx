'use client';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';
import Badge from '@/components/Badge';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word_utils/getLexicalForm';

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
      className='flex cursor-pointer select-none flex-col overflow-hidden rounded-lg border border-gray-300 text-left shadow transition-colors selection:bg-gray-100 hover:border-blue-300 hover:bg-gray-200 dark:border-gray-900 dark:bg-gray-900 hover:dark:border-blue-700 dark:hover:bg-gray-800'
      onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
    >
      <div className='p-2 px-3'>
        <div className='float-end m-1'>
          <Badge text={MAPPER.extended.type[word.type]} />
        </div>
        <p className='line-clamp-1 text-2xl'>{highlightedWord}</p>
        <p>{lexicalForm ? lexicalForm : <br />}</p>
        <br />
        <p>{word.translation.length > 0 ? word.translation.join(', ') : 'Keine Übersetzung'}</p>
      </div>
      <div className='mt-auto w-full bg-blue-200 p-2 px-3 text-center dark:bg-blue-950'>
        Wort ansehen <ChevronRight size={16} className='inline' />
      </div>
    </div>
  );
};

export default WordCard;
