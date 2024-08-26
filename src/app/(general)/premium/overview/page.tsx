'use client';
import Heading from '@/components/Heading';
import Card from './components/Card';
import { useDbUser } from '@/hooks/useDbUser';
import { monthlyPrice } from '@/constants/other';
import { useWidth } from '@/hooks/useWidth';
import { useState } from 'react';

const features = [
  'Wörterbuch',
  'Grammatikartikel',
  'Grammatikübungen',
  'Vokabeltrainer',
  'alle Flexionstrainer',
  'Wörterbuch',
  'Kompetenzbereich',
  'Automatisches Abfragen',
  'Statistiken',
  'Fehleranalyse',
  'Supporte uns'
];

const Page = () => {
  const [user, dbUser] = useDbUser();
  const [hideBasic, setHideBasic] = useState(false);
  const [onlyShowNextRank, setOnlyShowNextRank] = useState(false);

  const userIsPremium = dbUser.isLoaded ? dbUser.user?.premium || false : false;

  useWidth(
    'lg',
    () => {
      setHideBasic(true);
    },
    () => {
      setHideBasic(false);
    }
  );

  useWidth(
    'sm',
    () => {
      setOnlyShowNextRank(true);
    },
    () => {
      setOnlyShowNextRank(false);
    }
  );

  return (
    <>
      <Heading>Lateininator Premium</Heading>
      <div className='my-5 grid gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3'>
        {!hideBasic && (
          <Card
            title='Basic'
            features={features.slice(0, 2)}
            price={0}
            color='gray'
            owned
            description='Für Alle Benutzer'
            highest={!user.isSignedIn}
          />
        )}
        {(!onlyShowNextRank || !user.isSignedIn || !user.isLoaded) && (
          <Card
            title='Full'
            features={features.slice(0, 6)}
            price={0}
            href='/account/sign-in'
            color='sky'
            description='Für Angemeldete Benutzer'
            owned={user.isSignedIn}
            loading={!user.isLoaded}
            highest={!userIsPremium && user.isSignedIn}
          />
        )}
        {(!onlyShowNextRank || user.isSignedIn || !user.isLoaded) && (
          <Card
            title='Premium'
            features={features}
            price={monthlyPrice}
            color='pink'
            description='Für Supporter'
            owned={userIsPremium}
            loading={!dbUser.isLoaded}
            highest={userIsPremium}
            href={'/premium/checkout'}
          />
        )}
      </div>
    </>
  );
};

export default Page;
