import { Word } from '@/types/word';
import WordDisplay from './WordDisplay';
import { Dispatch, SetStateAction } from 'react';

type WordContainerProps = {
  words: Word[];
  addedWords: Word[];
  setWords: Dispatch<SetStateAction<Word[]>>;
};

const WordContainer = ({ words, setWords, addedWords }: WordContainerProps) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {words?.length === 0 ? (
        <div className='text-center text-gray-500'>Keine Wörter gefunden</div>
      ) : (
        words.map((word) => (
          <WordDisplay key={word.id} word={word} added={addedWords.some((w) => w.id === word.id)} setWords={setWords} />
        ))
      )}
    </div>
  );
};

export default WordContainer;
