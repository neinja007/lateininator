'use client';

import { useDbUser } from '@/hooks/database/queries/useDbUser';

export const IsStaff = ({ children, not }: { children: React.ReactNode; not?: boolean }) => {
  const { dbUser, isLoading } = useDbUser();

  if (isLoading || !dbUser?.staff) {
    return not ? children : null;
  }

  return not ? null : children;
};
