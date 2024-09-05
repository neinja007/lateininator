'use client';

import Heading from '@/components/Heading';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Page = () => {
  const { data: stripeUser, isLoading } = useQuery({
    queryKey: ['stripeUser'],
    queryFn: () => axios.get('/api/stripe-user').then((res) => res.data)
  });

  const user = useUser();

  if (user.isLoaded && !user.isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (isLoading) {
    return (
      <div>
        <Heading>Abo Verwalten</Heading>
        <div>Wird geladen...</div>
      </div>
    );
  }

  return (
    <div>
      <Heading>Abo Verwalten</Heading>
      <div>
        <div>{JSON.stringify(stripeUser)}</div>
      </div>
    </div>
  );
};

export default Page;
