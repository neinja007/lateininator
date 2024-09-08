'use client';

import FancyLink from '@/components/FancyLink';
import Heading from '@/components/Heading';
import { IsPremium } from '@/components/IsPremium';
import { Gem, LogOut, UserIcon } from 'lucide-react';
import Setting from './components/Setting';
import Skeleton from '@/components/Skeleton';
import { useSettings } from '@/hooks/database/useSettings';

const Page = () => {
  const { settings, status } = useSettings();

  return (
    <div>
      <Heading>Einstellungen</Heading>
      <div className='mb-5'>
        {status === 'pending' &&
          [...Array(3)].map((_, index) => <Skeleton key={index} pulse customSize className='my-2 h-20 w-full' />)}
        {status === 'success' && settings && settings.map((setting) => <Setting key={setting.id} setting={setting} />)}
      </div>
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
        <IsPremium>
          <FancyLink
            route={{
              label: 'Abo Verwalten',
              href: '/premium/manage',
              icon: Gem,
              color: 'pink'
            }}
          />
        </IsPremium>
      </div>
    </div>
  );
};

export default Page;
