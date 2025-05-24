import { useWords } from '@/hooks/database/queries/useWords';
import { Word } from '@/types/word';
import { Dispatch, SetStateAction, useState } from 'react';

type WordSelectorProps = {
  word?: Word;
  setWord: Dispatch<SetStateAction<Word | undefined>>;
};

const WordSelector = ({ word, setWord }: WordSelectorProps) => {
  const [query, setQuery] = useState('');
  const { data: words } = useWords<Word[]>({ query, include: ['noun', 'verb', 'adjective'] });

  return (
    <div className='mb-5 rounded-lg border px-4 py-2'>
      {word ? (
        <span>
          Sie bearbeiten{' '}
          <b>
            {word.name} (id: {word.id})
          </b>
          .{' '}
          <button className='text-blue-500 underline' onClick={() => setWord(undefined)}>
            Word nicht mehr bearbeiten
          </button>
        </span>
      ) : (
        <span>
          Sie erstellen ein neues Wort. Existierendes Wort auswählen:{' '}
          <input
            className='ml-2 w-40 border-b bg-transparent'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {((words as Word[]) || []).slice(0, 5).map((word) => (
            <button key={word.id} className='ml-2 cursor-pointer text-blue-500 underline' onClick={() => setWord(word)}>
              {word.name}
            </button>
          ))}
        </span>
      )}
    </div>
  );
};

export default WordSelector;
