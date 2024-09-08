'use client';

import { useDbUser } from '@/hooks/database/queries/useDbUser';

export const IsPremium = ({ children, not }: { children: React.ReactNode; not?: boolean }) => {
  const { dbUser, isLoading } = useDbUser();

  if (isLoading || !dbUser?.premium) {
    return not ? children : null;
  }

  return not ? null : children;
};
