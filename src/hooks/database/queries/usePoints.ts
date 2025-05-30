import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePoints = () => {
  const query = useQuery<number>({
    queryKey: ['points'],
    queryFn: () => axios.get('/api/points').then((res) => res.data)
  });

  return query;
};
