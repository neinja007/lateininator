import Badge from '@/components/Badge';
import WordInfo from './WordInfo';
import { MAPPER } from '@/utils/other/mapper';
import { Word } from '@/types/word';
import { mapTypeToColor } from '@/constants/other';

type WordDisplayProps = {
  word: Word;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
  return (
    <div className='flex items-baseline justify-between'>
      <p className='text-2xl font-medium'>
        {word.name} <Badge text={MAPPER.extended.type.singular[word.type]} color={mapTypeToColor[word.type]} />
      </p>
      {word.info && <WordInfo info={word.info} />}
    </div>
  );
};

export default WordDisplay;
