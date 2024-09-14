import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useToggleSavedCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId: number) => axios.patch('/api/collection', undefined, { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: false }] });
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: true }] });
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    }
  });
};
