import { CollectionSchema } from '@/schemas/collectionSchema';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCollection = () => {
  const { mutate: updateCollection, status } = useMutation({
    mutationFn: async (collection: CollectionSchema) => axios.put('/api/collections', collection)
  });

  return { updateCollection, status };
};
