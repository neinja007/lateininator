'use client';

import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';
import { SignedOut, RedirectToSignIn, SignedIn, UserProfile } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Page = () => {
  const darkTheme = useIsDarkTheme();

  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        {darkTheme !== undefined && <UserProfile appearance={{ baseTheme: darkTheme ? dark : undefined }} />}
      </SignedIn>
    </div>
  );
};

export default Page;
