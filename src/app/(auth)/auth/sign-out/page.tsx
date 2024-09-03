'use client';

import LoadingHeading from '@/components/LoadingHeading';
import { SignOutButton, useClerk } from '@clerk/nextjs';

const Page = () => {
  const { signOut } = useClerk();

  signOut();

  return (
    <>
      <LoadingHeading>Sie werden abgemeldet...</LoadingHeading>
      Sollte dies zu lange dauern,{' '}
      <SignOutButton>
        <button className='text-blue-500 hover:underline'>klicken sie bitte hier</button>
      </SignOutButton>
      .
    </>
  );
};

export default Page;
