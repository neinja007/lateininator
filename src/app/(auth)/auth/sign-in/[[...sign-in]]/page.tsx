'use client';

import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';
import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const SignInPage = () => {
  const darkTheme = useIsDarkTheme();

  return darkTheme !== undefined && <SignIn appearance={{ baseTheme: darkTheme ? dark : undefined }} />;
};

export default SignInPage;
