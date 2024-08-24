import { useUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useDbUser = (): [any, User | undefined] => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [dbUser, setDbUser] = useState<User>();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetch('/api/user')
        .then((response) => response.json())
        .then((data) => setDbUser(data));
    }
  }, [isLoaded]);

  return [isLoaded ? user : undefined, dbUser];
};
