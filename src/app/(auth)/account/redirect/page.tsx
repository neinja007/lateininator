import { LoaderPinwheel } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <p className='mb-4 flex animate-pulse items-center justify-center text-4xl'>
        <LoaderPinwheel className='mr-3 h-8 w-8 animate-spin' /> Dein Profil wird eingerichtet...
      </p>
      <p>
        Du wirst in Kürze weitergeleitet. Wenn dies länger als 5 Sekunden dauert, kontaktiere bitte unseren{' '}
        <Link className='text-blue-500 hover:underline' href={'mailto:support@lateininator.com'}>
          support
        </Link>
        .
      </p>
    </div>
  );
};

export default Page;
