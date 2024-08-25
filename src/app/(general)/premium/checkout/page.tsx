'use client';

import Heading from '@/components/Heading';
import getStripe from '@/utils/stripe/get-stripe';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { useEffect, useState } from 'react';

const stripePromise = getStripe();

// q: how can i specify that there is a trial period (to stripe, not the user. im scared that ill charge far too much)
// a: https://stripe.com/docs/billing/subscriptions/trials

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches), []);

  return (
    <div>
      <Heading>Lateininator Premium</Heading>
      <Elements
        stripe={stripePromise}
        options={{
          mode: 'subscription',
          amount: 500,
          currency: 'eur',
          appearance: {
            theme: darkMode ? 'night' : 'stripe',
            labels: 'above',
            variables: {
              colorText: '#ffffff',
              colorTextSecondary: '#ffffff'
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
