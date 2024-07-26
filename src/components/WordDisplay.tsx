import { Word } from '@/types';
import Badge from '@/components/Badge';
import WordInfo from './WordInfo';
import { MAPPER } from '@/utils/mapper';

type WordDisplayProps = {
  word: Word;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
  return (
    <div>
      {word.info && <WordInfo info={word.info} />}
      <p className='text-2xl font-medium'>
        {word.word} <Badge text={MAPPER.extended.type[word.type]} />
      </p>
    </div>
  );
};

export default WordDisplay;
