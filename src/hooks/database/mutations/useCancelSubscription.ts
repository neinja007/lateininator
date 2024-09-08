import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCancelSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axios.patch('/api/subscription', { cancel: true }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
      queryClient.invalidateQueries({ queryKey: ['dbUser'] });
    }
  });
};
