import Link from 'next/link';
import ui from '@/styles/ui.module.css';
import Heading from '@/components/Heading';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const WordNotFound = () => {
  return (
    <div>
      <Heading>Das Wort wurde nicht gefunden.</Heading>
      <div>
        Wenn Sie denken, das dies ein Fehler ist, so melden Sie diesen bitte bei unserem <LinkToSupportEmail /> .
        Andernfalls können Sie{' '}
        <Link href={'/vocabulary/dictionary'} className={ui.link}>
          hier zum Wörterbuch zurückkehren
        </Link>
        .
      </div>
    </div>
  );
};

export default WordNotFound;
