import Badge from '@/components/Badge';
import WordInfo from './WordInfo';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { Coins } from 'lucide-react';

type WordDisplayProps = {
  word: Word;
  points?: number;
};

const WordDisplay = ({ word, points }: WordDisplayProps) => {
  return (
    <div className='flex items-baseline justify-between'>
      {word.info && <WordInfo info={word.info} />}
      <p className='text-2xl font-medium'>
        {word.name} <Badge text={MAPPER.extended.type.singular[word.type]} />
      </p>
      {points && (
        <p className='flex items-center gap-1'>
          <b>{points}</b> <Coins size={16} />
        </p>
      )}
    </div>
  );
};

export default WordDisplay;
