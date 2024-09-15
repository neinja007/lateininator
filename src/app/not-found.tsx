import TutorialHeading from '@/components/TutorialHeading';
import Link from '@/components/Link';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const Page = () => {
  return (
    <div>
      <TutorialHeading heading='Diese Seite wurde nicht gefunden (Error 404).'>
        Wenn Sie glauben, dass dies ein Fehler ist, bitten wir Sie, unseren <LinkToSupportEmail /> zu kontaktieren.
        Ansonsten können Sie <Link href='/dashboard'>hier zurück zur Startseite</Link> gelangen.
      </TutorialHeading>
      <p className='mt-2'>
        Ansonsten können Sie <Link href='/dashboard'>hier zurück zur Startseite gelangen</Link>.
      </p>
    </div>
  );
};

export default Page;
