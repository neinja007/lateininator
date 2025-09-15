import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLastActive = () => {
  return useQuery<
    {
      updatedAt: string;
      name: string;
      id: string;
      staff: boolean;
    }[]
  >({
    queryKey: ['last-active'],
    queryFn: () => axios.get('/api/user/last-active').then((res) => res.data)
  });
};
