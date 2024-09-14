import Heading from '@/components/Heading';
import Link from '@/components/Link';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const Page = () => {
  return (
    <div>
      <Heading>Diese Seite wurde nicht gefunden (Error 404).</Heading>
      <p>
        Wenn Sie glauben, dass dies ein Fehler ist, bitten wir Sie, unseren <LinkToSupportEmail /> zu kontaktieren.
      </p>
      <p className='mt-2'>
        Ansonsten können Sie <Link href='/dashboard'>hier zurück zur Homepage gelangen</Link>.
      </p>
    </div>
  );
};

export default Page;
