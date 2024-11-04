import { WordSchema } from '@/schemas/word';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddWord = (id?: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newWord: WordSchema) => axios.put('/api/words', newWord, { params: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ predicate: (query) => query.queryKey?.includes('words') });
    }
  });

  return mutation;
};
