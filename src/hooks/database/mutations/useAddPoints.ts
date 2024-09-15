import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddPoints = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (points: number) => axios.post('/api/points', { points }).then((res) => res.data),
    onError: (error) => {
      console.error('Error adding points:', error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['points'] });
    }
  });
};
