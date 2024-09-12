import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSubscription = () => {
  const query = useQuery({
    queryKey: ['subscription'],
    queryFn: () => axios.get('/api/subscription').then((res) => res.data.data)
  });

  return query;
};
