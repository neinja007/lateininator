import { Word } from '@/types/word';
import WordDisplay from './WordDisplay';

type WordContainerProps = {
  words: Word[];
  addedWords: Word[];
  setWords: (words: Word[]) => void;
};

const WordContainer = ({ words, setWords, addedWords }: WordContainerProps) => {
  return (
    <div className='mt-3 flex flex-wrap gap-2'>
      {words?.length === 0 ? (
        <div className='text-center text-gray-500'>Keine Wörter gefunden</div>
      ) : (
        words.map((word) => (
          <WordDisplay
            key={word.id}
            word={word}
            added={addedWords.some((w) => w.id === word.id)}
            setWords={setWords}
            words={addedWords}
          />
        ))
      )}
    </div>
  );
};

export default WordContainer;
