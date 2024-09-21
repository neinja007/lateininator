'use client';
import FancyLink from '@/components/FancyLink';
import Heading from '@/components/Heading';
import { IsPremium } from '@/components/IsPremium';
import { Gem, LogOut, UserIcon } from 'lucide-react';
import Setting from './components/Setting';
import Skeleton from '@/components/Skeleton';
import { useSettings } from '@/hooks/database/queries/useSettings';
import { SettingKey } from '@prisma/client';
import { settings } from '@/constants/settings';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';
import Hr from '@/components/Hr';

const Page = () => {
  const {
    settings: DbSettings,
    query: { status }
  } = useSettings();

  return (
    <div>
      <Heading heading='Einstellungen'>
        Hier können Sie Ihre Einstellungen anpassen. Wenn Sie sich eine weitere Einstellung wünschen, können Sie diese
        bei unserem <LinkToSupportEmail /> anfragen.
      </Heading>
      <div className='mb-5'>
        {status === 'pending' &&
          [...Array(Object.keys(settings).length)].map((_, index) => (
            <Skeleton key={index} pulse customSize className='my-2 h-20 w-full' />
          ))}
        {status === 'success' &&
          DbSettings &&
          Object.keys(settings).map((key) => (
            <Setting
              key={key}
              settingKey={key as SettingKey}
              settingValue={key in DbSettings ? DbSettings[key as keyof typeof DbSettings] : undefined}
            />
          ))}
      </div>
      <Hr className='my-5' />
      <p className='my-2 text-center text-lg font-bold'>Konto-Einstellungen</p>
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
            color: 'red',
            status: 'signedIn'
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
