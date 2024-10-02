import Hr from '@/components/Hr';
import Input from '@/components/Input';
import { useEffect, useState } from 'react';
import { Word as WordType } from '@/types/word';
import { useWords } from '@/hooks/database/queries/useWords';
import WordContainer from './WordContainer';

type AddWordsProps = {
  listName: string;
  words: WordType[];
  setWords: (words: WordType[]) => void;
};

const AddWords = ({ listName, words, setWords }: AddWordsProps) => {
  const [query, setQuery] = useState('');

  const { data } = useWords<WordType[]>({
    query
  });

  useEffect(() => {
    setQuery('');
  }, [listName]);

  return (
    <div>
      <Hr className='my-4' />
      <h2 className='text-center text-lg'>
        Wörter in <b>{listName}</b>
      </h2>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2'>
        <div className='space-y-3 border-b pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-3'>
          <Input className='w-full' placeholder='Wort suchen...' value={query} handleChange={setQuery} />
          <div className='overflow-hidden overflow-y-scroll'>
            <WordContainer addedWords={words} words={data?.slice(0, 20) || []} setWords={setWords} />
          </div>
        </div>
        <div className='md:pl-3'>
          <WordContainer addedWords={words} words={words} setWords={setWords} />
        </div>
      </div>
    </div>
  );
};

export default AddWords;
