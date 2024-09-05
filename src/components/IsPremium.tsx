'use client';

import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const IsPremium = ({ children, not }: { children: React.ReactNode; not?: boolean }) => {
  const { data: dbUser, isLoading } = useQuery<User>({
    queryKey: ['dbUser'],
    queryFn: () => axios.get('/api/user').then((res) => res.data)
  });

  if (isLoading || !dbUser?.premium) {
    return not ? children : null;
  }

  return not ? null : children;
};
