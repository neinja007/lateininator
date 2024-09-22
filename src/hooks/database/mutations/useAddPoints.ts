import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddPoints = (method: 'increment' | 'set') => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (points: number) => axios.post('/api/points', { points, method }).then((res) => res.data),
    onMutate: async (newPoints: number) => {
      await queryClient.cancelQueries({ queryKey: ['points'] });
      const previousPoints = queryClient.getQueryData(['points']);
      queryClient.setQueryData(['points'], (old: number | undefined) =>
        method === 'increment' ? (old || 0) + newPoints : newPoints
      );
      return { previousPoints };
    },
    onError: (error, _, context) => {
      console.error('Error adding points:', error);
      queryClient.setQueryData(['points'], context?.previousPoints);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['points'] });
    }
  });
};
