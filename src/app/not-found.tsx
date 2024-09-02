import Heading from '@/components/Heading';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Heading>Diese Seite wurde nicht gefunden (Error 404).</Heading>
      <p>
        Wenn Sie glauben, dass dies ein Fehler ist, bitten wir Sie, unseren <LinkToSupportEmail /> zu kontaktieren.
      </p>
      <p className='mt-2'>
        Ansonsten können Sie{' '}
        <Link className='text-blue-500 hover:underline' href='/dashboard'>
          hier zurück zur Homepage gelangen
        </Link>
        .
      </p>
    </div>
  );
};

export default Page;
