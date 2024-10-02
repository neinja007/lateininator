import { WordSchema } from '@/schemas/word';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useAddWord = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newWord: WordSchema) => axios.put('/api/words', newWord),
    onSuccess: () => {
      queryClient.invalidateQueries({ predicate: (query) => query.queryKey?.includes('words') });
    }
  });

  return mutation;
};
