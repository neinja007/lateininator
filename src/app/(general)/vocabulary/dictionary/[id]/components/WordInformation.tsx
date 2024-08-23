import { words } from '@/data/words';
import Link from 'next/link';
import ui from '@/styles/ui.module.css';
import WordInfo from '@/components/WordInfo';
import { Word } from '@/types/word';

type WordInformationProps = { word: Word };

const WordInformation = ({ word }: WordInformationProps) => {
  return (
    <div className='grid grid-cols-3'>
      <p>
        {word.translation.length === 0 ? null : word.translation.length === 1 ? 'Übersetzung:' : 'Übersetzungen:'}{' '}
        <b>{word.translation.length > 0 ? word.translation.join(', ') : 'Keine Übersetzung'}</b>
      </p>
      <p className='text-center'>
        {word.derivative && (
          <span>
            Abwandlung von{' '}
            <Link href={`/vocabulary/dictionary/${word.derivative}`} className={ui.link}>
              {words.find((parent) => parent.id == word.derivative)?.word}
            </Link>
          </span>
        )}
      </p>
      {word.info && <WordInfo info={word.info} />}
    </div>
  );
};

export default WordInformation;
