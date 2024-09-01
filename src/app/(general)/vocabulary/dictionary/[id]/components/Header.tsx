import Heading from '@/components/Heading';
import Badge from '@/components/Badge';
import Link from 'next/link';
import ui from '@/styles/ui.module.css';
import { clsx } from 'clsx';
import { Word } from '@/types/word';
import { getLexicalForm } from '@/utils/word/getLexicalForm';
import { ArrowLeft } from 'lucide-react';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div className='min-h-12 grid-cols-2 justify-center sm:flex sm:gap-4 md:grid lg:grid-cols-3'>
      <Link
        className={clsx(
          ui.basic,
          'hover w-fit bg-gray-100 text-center transition-colors hover:bg-gray-200 md:!pl-2 dark:bg-gray-900 hover:dark:bg-gray-800'
        )}
        href={'/vocabulary/dictionary'}
      >
        <ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
      </Link>
      <Heading>
        <span className='mt-4 flex justify-center sm:mt-0 sm:justify-end lg:justify-center'>
          {word.name} {getLexicalForm(word)}
          <div className='ml-3 md:text-right'>
            <Badge text={word.type} />
          </div>
        </span>
      </Heading>
    </div>
  );
};

export default Header;
