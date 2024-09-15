import Link from '@/components/Link';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const WordNotFound = () => {
  return (
    <p>
      <b>Das Wort wurde nicht gefunden.</b> Wenn Sie denken, das dies ein Fehler ist, so melden Sie diesen bitte bei
      unserem <LinkToSupportEmail /> . Andernfalls können Sie{' '}
      <Link href='/vocabulary/dictionary'>hier zum Wörterbuch zurückkehren</Link>.
    </p>
  );
};

export default WordNotFound;
