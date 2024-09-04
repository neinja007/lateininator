'use client';
import getStripe from '@/utils/stripe/get-stripe';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';
import { monthlyPrice } from '@/constants/other';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import Heading from '@/components/Heading';

const stripePromise = getStripe();

const Page = () => {
  const darkMode = useIsDarkTheme();

  const user = useUser();

  const router = useRouter();

  if (user.isLoaded && !user.isSignedIn) {
    router.push('/auth/sign-in?redirect=/premium/checkout');
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
