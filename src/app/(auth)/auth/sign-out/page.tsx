'use client';

import LoadingHeading from '@/components/LoadingHeading';
import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { SignOutButton, useClerk } from '@clerk/nextjs';
import clsx from 'clsx';

const Page = () => {
  const { signOut } = useClerk();
  const primaryColor = usePrimaryColor();

  signOut();

  return (
    <>
      <LoadingHeading>Sie werden abgemeldet...</LoadingHeading>
      Sollte dies zu lange dauern,{' '}
      <SignOutButton>
        <button className={clsx('hover:underline', COLORS[primaryColor].text)}>klicken sie bitte hier</button>
      </SignOutButton>
      .
    </>
  );
};

export default Page;
