import { IsPremium } from '@/components/IsPremium';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export const makeStatusDependent = (
  element: React.ReactNode,
  condition: 'signedIn' | 'signedOut' | 'premium' | 'notPremium' | undefined
): React.ReactNode => {
  if (condition === 'signedIn') {
    return <SignedIn>{element}</SignedIn>;
  }

  if (condition === 'signedOut') {
    return <SignedOut>{element}</SignedOut>;
  }

  if (condition === 'premium') {
    return <IsPremium>{element}</IsPremium>;
  }

  if (condition === 'notPremium') {
    return <IsPremium not>{element}</IsPremium>;
  }

  return element;
};
