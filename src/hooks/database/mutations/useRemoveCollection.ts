import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useRemoveCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId: number) => axios.delete('/api/collection', { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ predicate: (query) => query.queryKey.includes('collections') });
    }
  });
};
