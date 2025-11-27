import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useApplyCreatorCode = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (creatorCode: string) => axios.post('/api/creator-code', { creatorCode }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['points'] });
      const previousPoints = queryClient.getQueryData(['points']);
      queryClient.setQueryData(['points'], (old: number | undefined) => (old ? old + 100 : 100));
      return { previousPoints };
    },
    onError: (error, _, context) => {
      console.error('Error adding points:', error);
      queryClient.setQueryData(['points'], context?.previousPoints);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['points'] });
      queryClient.invalidateQueries({ queryKey: ['applied-creator-code'] });
    }
  });
};
