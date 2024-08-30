'use client';

import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';
import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Page = () => {
  const darkTheme = useIsDarkTheme();

  return darkTheme !== undefined && <SignUp appearance={{ baseTheme: darkTheme ? dark : undefined }} />;
};

export default Page;
