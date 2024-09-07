'use client';

import { useQuery } from '@tanstack/react-query';
import FancyLink from '@/components/FancyLink';
import Heading from '@/components/Heading';
import { IsPremium } from '@/components/IsPremium';
import { Gem, LogOut, UserIcon } from 'lucide-react';
import axios from 'axios';
import { DefaultSetting } from '@prisma/client';
import Setting from './components/Setting';

const Page = () => {
  const { data: settings, isLoading } = useQuery({
    queryKey: ['user-settings'],
    queryFn: () => axios.get('/api/user-settings')
  });

  return (
    <div>
      <Heading>Einstellungen</Heading>
      <div className='h-44'>
        {settings?.data.map((setting: DefaultSetting) => <Setting key={setting.id} setting={setting} />)}
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
