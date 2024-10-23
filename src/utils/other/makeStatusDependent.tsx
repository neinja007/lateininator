import { IsPremium } from '@/components/IsPremium';
import { IsStaff } from '@/components/IsStaff';
import { RouteStatus } from '@/types/other';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export const makeStatusDependent = (element: React.ReactNode, condition?: RouteStatus): React.ReactNode => {
  if (condition === 'signedIn') {
    return <SignedIn>{element}</SignedIn>;
  } else if (condition === 'signedOut') {
    return <SignedOut>{element}</SignedOut>;
  } else if (condition === 'premium') {
    return <IsPremium>{element}</IsPremium>;
  } else if (condition === 'notPremium') {
    return <IsPremium not>{element}</IsPremium>;
  } else if (condition === 'staff') {
    return <IsStaff>{element}</IsStaff>;
  }

  return element;
};
