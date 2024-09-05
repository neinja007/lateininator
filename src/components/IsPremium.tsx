import { useDbUser } from '@/hooks/useDbUser';

export const IsPremium = ({ children, not }: { children: React.ReactNode; not?: boolean }) => {
  const [_, dbUser] = useDbUser();
  if (!dbUser.isLoaded || !dbUser.user?.premium) {
    return not ? children : null;
  }

  return not ? null : children;
};
