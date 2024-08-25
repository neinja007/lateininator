'use client';

import Heading from '@/components/Heading';
import getStripe from '@/utils/stripe/get-stripe';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { useEffect, useState } from 'react';
import { monthlyPrice } from '@/constants/other';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const stripePromise = getStripe();

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches), []);

  const user = useUser();

  const router = useRouter();

  if (!user.isSignedIn) {
    router.push('/account/sign-in');
  }

  return (
    <div>
      <Heading>Lateininator Premium</Heading>
      <Elements
        stripe={stripePromise}
        options={{
          locale: 'de',
          mode: 'subscription',
          amount: monthlyPrice * 100,
          currency: 'eur',
          captureMethod: 'automatic',
          appearance: {
            theme: darkMode ? 'night' : 'stripe',
            labels: 'above',
            variables: {
              colorText: '#ffffff',
              colorTextSecondary: '#ffffff',
              colorPrimary: 'pink'
            }
          }
        }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Page;
