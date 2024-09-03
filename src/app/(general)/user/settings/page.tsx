import FancyLink from '@/components/FancyLink';
import Heading from '@/components/Heading';
import { LogOut, UserIcon } from 'lucide-react';

const Page = () => {
  return (
    <div>
      <Heading>Einstellungen</Heading>
      <div className='h-44'>Bis jetzt gibt es noch keine Einstellungen.</div>
      <p className='mb-2 text-center text-lg font-bold'>Konto-Einstellungen</p>
      <div className='items-center justify-between gap-x-2 sm:flex'>
        <FancyLink
          route={{
            label: 'Konto Verwalten',
            href: '/auth/profile',
            icon: UserIcon,
            color: 'blue'
          }}
        />
        <FancyLink
          route={{
            label: 'Abmelden',
            href: '/auth/sign-out',
            icon: LogOut,
            color: 'red'
          }}
        />
      </div>
    </div>
  );
};

export default Page;
