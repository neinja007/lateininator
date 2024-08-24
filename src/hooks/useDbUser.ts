import { useUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useDbUser = (): [
  { isLoaded: boolean; isSignedIn: boolean; user: ReturnType<typeof useUser>['user'] },
  { isLoaded: boolean; isSignedIn: boolean; user: User | undefined }
] => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [dbUserData, setDbUserData] = useState<User>();
  const [dbUserLoading, setDbUserLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoaded) {
      fetch('/api/user', { method: 'GET' })
        .then((response) => {
          setDbUserLoading(false);
          if (response.ok) {
            return response.json();
          } else {
            setDbUserData(undefined);
          }
        })
        .then((data) => setDbUserData(data));
    }
  }, [isLoaded]);

  const clerkUser = {
    isLoaded,
    isSignedIn: !!isSignedIn,
    user
  };

  const dbUser = {
    isLoaded: !dbUserLoading,
    isSignedIn: !!dbUserData,
    user: dbUserData
  };

  return [clerkUser, dbUser];
};
