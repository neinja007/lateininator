'use client';
import Heading from '@/components/Heading';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Heading>Lateininator Premium</Heading>
      <p className='mt-5 text-center'>
        <span className='text-green-500'>
          Die Bezahlung war erfolgreich. Vielen Dank für Ihren Einkauf! Sie können von nun an alle Premium-Funktionen
          nutzen.
          <br />
          <Link href='/' className='text-blue-500 hover:underline'>
            Zurück zur Startseite
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Page;
