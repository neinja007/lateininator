import { Collection } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateCollection = () => {
  const { mutate: updateCollection, status } = useMutation({
    mutationFn: async (collection: Omit<Collection, 'createdAt' | 'updatedAt' | 'ownerId'>) =>
      axios.put('/api/collections', collection)
  });

  return { updateCollection, status };
};
