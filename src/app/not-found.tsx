import Heading from '@/components/Heading';
import Link from '@/components/Link';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const Page = () => {
  return (
    <div>
      <Heading heading='Diese Seite wurde nicht gefunden (Error 404).'>
        Wenn Sie glauben, dass dies ein Fehler ist, bitten wir Sie, unseren <LinkToSupportEmail /> zu kontaktieren.
        Ansonsten können Sie <Link href='/dashboard'>hier zurück zur Startseite</Link> gelangen.
      </Heading>
      <p className='mt-2'>
        Ansonsten können Sie <Link href='/dashboard'>hier zurück zur Startseite gelangen</Link>.
      </p>
    </div>
  );
};

export default Page;
