'use client';
import Heading from '@/components/Heading';
import Card from './components/Card';
import { useDbUser } from '@/hooks/useDbUser';
import { monthlyPrice } from '@/constants/other';
import { useWidth } from '@/hooks/useWidth';
import { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const features = [
  'Wörterbuch',
  'Grammatikartikel',
  'Grammatikübungen',
  'Vokabeltrainer',
  'Deklinationstrainer',
  'Konjugationstrainer',
  'Komparationstrainer',
  'Kompetenzanalyse',
  'Gezieltes Abfragen',
  'Statistiken',
  'Fehleranalyse',
  'Unterstütze uns'
];

const Page = () => {
  const [user, dbUser] = useDbUser();
  const [hideBasic, setHideBasic] = useState(false);
  const [onlyShowNextRank, setOnlyShowNextRank] = useState(false);

  const userIsPremium = dbUser.isLoaded ? dbUser.user?.premium || false : false;

  const redirectToCheckout = async () => {
    const { sessionId } = await axios.post('/api/create-checkout-session').then((res) => res.data);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    }
  };

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

  const showFull = !onlyShowNextRank || !user.isSignedIn || !user.isLoaded;
  const showPremium = !onlyShowNextRank || user.isSignedIn || !user.isLoaded;
  const premiumIsAvailable = !dbUser.isLoaded || user.isSignedIn;

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
        {showFull && (
          <Card
            title='Full'
            features={features.slice(0, 7)}
            price={0}
            href='/auth/sign-in'
            color='sky'
            description='Für Angemeldete Benutzer'
            owned={user.isSignedIn}
            loading={!user.isLoaded}
            highest={!userIsPremium && user.isSignedIn}
          />
        )}
        {showPremium && (
          <Card
            title='Premium'
            features={features}
            price={monthlyPrice}
            color='pink'
            description='Für Supporter'
            owned={userIsPremium}
            loading={!dbUser.isLoaded}
            highest={userIsPremium}
            href={'/auth/sign-in'}
            onClick={premiumIsAvailable ? redirectToCheckout : undefined}
          />
        )}
      </div>
    </>
  );
};

export default Page;
