import Link from 'next/link';
import ui from '@/styles/ui.module.css';

const WordNotFound = () => {
  return (
    <span>
      Wort nicht gefunden.{' '}
      <Link href={'/vocabulary/dictionary'} className={ui.link}>
        Zum Wörterbuch
      </Link>
    </span>
  );
};

export default WordNotFound;
