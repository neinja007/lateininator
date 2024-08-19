'use client';
import Badge from '@/components/Badge';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word_utils/getLexicalForm';

type WordRowProps = {
  word: Word;
  query?: string;
};

const WordRow = ({ word, query }: WordRowProps) => {
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

  return (
    <tr
      className='cursor-pointer select-none border-t hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-800'
      onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
    >
      <td className='p-2 px-4'>
        {highlightedWord} <i>{getLexicalForm(word)}</i>
      </td>
      <td className='p-2 px-4'>{word.translation.length > 0 ? word.translation.join(', ') : 'Keine Übersetzung'}</td>
      <td className='p-2 px-4'>
        <Badge text={MAPPER.extended.type[word.type]} />
      </td>
      <td className='p-2 px-4'>
        <div className='float-end flex'>
          Wort ansehen <ChevronRight size={16} className='m-1' />
        </div>
      </td>
    </tr>
  );
};

export default WordRow;
