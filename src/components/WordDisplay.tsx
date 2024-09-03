import Badge from '@/components/Badge';
import WordInfo from './WordInfo';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';

type WordDisplayProps = {
  word: Word;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
  return (
    <div>
      {word.info && <WordInfo info={word.info} />}
      <p className='text-2xl font-medium'>
        {word.name} <Badge text={MAPPER.extended.type.singular[word.type]} />
      </p>
    </div>
  );
};

export default WordDisplay;
