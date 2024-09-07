import { Word } from '@/types/word';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useWords = (id?: number, include: string[] = []) => {
  const { data: words, status } = useQuery({
    queryKey: ['words', id, include],
    queryFn: () => axios.get('/api/words', { params: { id, include } }).then((res) => res.data)
  });

  if (id) {
    return { word: words as Word, status };
  } else {
    return { words: words as Word[], status };
  }
};
