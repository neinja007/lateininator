import Heading from '@/components/Heading';
import Badge from '@/components/Badge';
import Link from 'next/link';
import ui from '@/styles/ui.module.css';
import { clsx } from 'clsx';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word_utils/getLexicalForm';
import { ArrowLeft } from 'lucide-react';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div className='grid h-12 grid-cols-3'>
      <Link
        className={clsx(
          ui.basic,
          'hover w-fit bg-gray-100 !pl-2 transition-colors hover:bg-gray-200 dark:bg-gray-900 hover:dark:bg-gray-800'
        )}
        href={'/vocabulary/dictionary'}
      >
        <ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
      </Link>
      <Heading>
        {word.word} {getLexicalForm(word)}
      </Heading>
      <div className='text-right'>
        <Badge text={word.type} />
      </div>
    </div>
  );
};

export default Header;
