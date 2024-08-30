import { SignedIn, SignedOut } from '@clerk/nextjs';

export const makeAuthStateDependent = (
  element: React.ReactNode,
  condition: 'signedIn' | 'signedOut' | undefined
): React.ReactNode => {
  if (condition === 'signedIn') {
    return <SignedIn>{element}</SignedIn>;
  }

  if (condition === 'signedOut') {
    return <SignedOut>{element}</SignedOut>;
  }

  return element;
};
