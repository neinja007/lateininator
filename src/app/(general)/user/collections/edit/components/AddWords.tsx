import Hr from '@/components/Hr';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useState } from 'react';
import { Word as WordType } from '@/types/word';
import { useWords } from '@/hooks/database/queries/useWords';
import WordContainer from './WordContainer';

type AddWordsProps = {
  listName: string;
  words: WordType[];
  setWords: Dispatch<SetStateAction<WordType[]>>;
};

const AddWords = ({ listName, words, setWords }: AddWordsProps) => {
  const [query, setQuery] = useState('');

  const { words: data } = useWords(undefined, undefined, query);

  useEffect(() => {
    setQuery('');
  }, [listName]);

  return (
    <div>
      <Hr className='my-4' />
      <h2 className='text-center text-lg'>
        Wörter in <b>{listName}</b>
      </h2>
      <div className='mt-4 grid grid-cols-2'>
        <div className='space-y-3 border-r pr-3'>
          <Input className='w-full' placeholder='Wort suchen...' value={query} onChange={setQuery} />
          <WordContainer addedWords={words} words={data?.slice(0, 20) || []} setWords={setWords} />
        </div>
        <div className='pl-3'>
          <h3 className='mb-1 flex h-12 items-center'>Schon hinzugefügte Wörter:</h3>
          <WordContainer addedWords={words} words={words} setWords={setWords} />
        </div>
      </div>
    </div>
  );
};

export default AddWords;
