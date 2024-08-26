'use client';
import getStripe from '@/utils/stripe/get-stripe';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';

const stripePromise = getStripe();

const Page = () => {
  const darkMode = useIsDarkTheme();

  const user = useUser();

  const router = useRouter();

  if (!user.isSignedIn) {
    router.push('/account/sign-in');
  }

  return (
    <div>
      {/* <Heading>Lateininator Premium</Heading>
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
      </Elements> */}
      Noch nicht verfügbar...
    </div>
  );
};

export default Page;
