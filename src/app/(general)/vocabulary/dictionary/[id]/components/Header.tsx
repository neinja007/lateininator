import Heading from '@/components/Heading';
import Badge from '@/components/Badge';
import { Word } from '@/types';
import { getLexicalForm } from '@/utils/formUtils';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import ui from '@/styles/ui.module.css';
import { clsx } from 'clsx';

type HeaderProps = { word: Word };

const Header = ({ word }: HeaderProps) => {
  return (
    <div className='grid h-12 grid-cols-3'>
      <Link className={clsx(ui.basic, 'w-fit !pl-2')} href={'/vocabulary/dictionary'}>
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
