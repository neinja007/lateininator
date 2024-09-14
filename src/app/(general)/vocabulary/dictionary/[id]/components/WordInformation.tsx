import Link from '@/components/Link';
import WordInfo from '@/components/WordInfo';
import { Word } from '@/types/word';

type WordInformationProps = { word: Word };

const WordInformation = ({ word }: WordInformationProps) => {
  return (
    <div className='grid items-center space-y-3 md:grid-cols-3 md:space-y-0'>
      <p>
        {word.translation.length === 0 ? null : word.translation.length === 1 ? 'Übersetzung:' : 'Übersetzungen:'}{' '}
        <b>{word.translation.length > 0 ? word.translation.join(', ') : 'Keine Übersetzung'}</b>
      </p>
      {word.derivative && (
        <p className='md:text-center'>
          <span>
            Abwandlung von <Link href={`/vocabulary/dictionary/${word.derivative.id}`}>{word.derivative.name}</Link>
          </span>
        </p>
      )}
      {word.info && <WordInfo info={word.info} />}
    </div>
  );
};

export default WordInformation;
