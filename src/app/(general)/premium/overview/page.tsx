'use client';

import Heading from '@/components/Heading';
import Card from './components/Card';
import { monthlyPrice } from '@/constants/other';
import { useWidth } from '@/hooks/useWidth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Stripe } from '@stripe/stripe-js';
import getStripe from '@/utils/stripe/get-stripe';
import { useUser } from '@clerk/nextjs';
import { useDbUser } from '@/hooks/database/useDbUser';

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

let stripe: Stripe | null = null;

const Page = () => {
  const { dbUser, isLoading } = useDbUser();

  const user = useUser();

  const [hideBasic, setHideBasic] = useState(false);
  const [onlyShowNextRank, setOnlyShowNextRank] = useState(false);

  const userIsPremium = (!isLoading && dbUser?.premium) || false;
  const redirectToCheckout = async () => {
    const session = await axios.post('/api/create-checkout-session').then((res) => res.data);

    if (stripe && session.sessionId) {
      const { error } = await stripe.redirectToCheckout({ sessionId: session.sessionId });
      if (error) {
        console.error('Error redirecting to checkout:', error);
        throw new Error('Error redirecting to checkout: ' + error.message);
      }
    }
  };

  useEffect(() => {
    getStripe().then((loadedStripe) => {
      if (loadedStripe) {
        stripe = loadedStripe;
      }
    });
  }, []);

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
  const premiumIsAvailable = isLoading || user.isSignedIn;

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
            highest={!user.isSignedIn && !isLoading}
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
            owned={!!user.isSignedIn && !isLoading}
            loading={!user.isLoaded}
            highest={!userIsPremium && !!user.isSignedIn && !isLoading}
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
            loading={isLoading}
            highest={userIsPremium}
            href={!premiumIsAvailable ? '/auth/sign-in' : undefined}
            onClick={premiumIsAvailable ? redirectToCheckout : undefined}
          />
        )}
      </div>
    </>
  );
};

export default Page;
