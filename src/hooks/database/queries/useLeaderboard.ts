import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLeaderboard = () => {
  return useQuery<
    {
      points: number;
      name: string;
      id: string;
      staff: boolean;
    }[]
  >({
    queryKey: ['leaderboard'],
    queryFn: () => axios.get('/api/user/leaderboard').then((res) => res.data)
  });
};
