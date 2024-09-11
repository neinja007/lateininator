import { Word as WordType } from '@/types/word';
import clsx from 'clsx';
import { Minus, Plus } from 'lucide-react';

type WordProps = {
  added: boolean;
  word: WordType;
  setWords: (words: WordType[]) => void;
  words: WordType[];
};

const WordDisplay = ({ added, word, setWords, words }: WordProps) => {
  return (
    <button
      key={word.id}
      onClick={
        added
          ? (e) => {
              e.stopPropagation();
              setWords(words.filter((w) => w.id !== word.id));
            }
          : (e) => {
              e.stopPropagation();
              setWords([...words, word]);
            }
      }
      className={clsx(
        'flex items-center rounded-lg bg-gray-200 px-3 py-2 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      )}
    >
      {word.name}
      {added ? (
        <Minus className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-red-400 p-0.5 dark:bg-red-700' />
      ) : (
        <Plus className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-green-400 p-0.5 dark:bg-green-700' />
      )}
    </button>
  );
};

export default WordDisplay;
