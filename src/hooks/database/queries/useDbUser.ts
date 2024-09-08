import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useDbUser = () => {
  const { data: dbUser, isLoading } = useQuery<User>({
    queryKey: ['dbUser'],
    queryFn: () => axios.get('/api/user').then((res) => res.data)
  });

  return { dbUser, isLoading };
};
