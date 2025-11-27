import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAppliedCreatorCode = () => {
  const query = useQuery<boolean>({
    queryKey: ['applied-creator-code'],
    queryFn: () => axios.get('/api/creator-code').then((res) => res.data)
  });

  return query;
};
