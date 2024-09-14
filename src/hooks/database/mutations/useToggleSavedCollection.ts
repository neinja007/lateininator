import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useToggleSavedCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId: number) => axios.patch('/api/collection', undefined, { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ predicate: (query) => query.queryKey?.[0] === 'collections' });
    }
  });
};
