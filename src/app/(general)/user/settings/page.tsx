'use client';

import { useQuery } from '@tanstack/react-query';
import FancyLink from '@/components/FancyLink';
import Heading from '@/components/Heading';
import { IsPremium } from '@/components/IsPremium';
import { Gem, LogOut, UserIcon } from 'lucide-react';
import axios from 'axios';
import { UserSetting } from '@prisma/client';
import Setting from './components/Setting';

const Page = () => {
  const { data: settings, status } = useQuery<UserSetting[]>({
    queryKey: ['user-settings'],
    queryFn: () => axios.get('/api/user-settings').then((res) => res.data)
  });

  return (
    <div>
      <Heading>Einstellungen</Heading>
      <div className='mb-5'>
        {status === 'success' &&
          settings &&
          settings.map((setting) => (
            <Setting key={setting.id} settingKey={setting.settingKey} value={setting.settingValue} />
          ))}
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
