import { CollectionSchema } from '@/schemas/collection';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCollection = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (collection: CollectionSchema) => axios.put('/api/collection', collection),
    onSuccess: () => {
      queryClient.invalidateQueries({ predicate: (query) => query.queryKey?.includes('collections') });
    }
  });

  return mutation;
};
