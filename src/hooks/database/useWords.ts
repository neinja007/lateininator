import { Word } from '@/types/word';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useWords = (id?: number, include: string[] = [], query?: string) => {
  if (query && id) {
    throw new Error('Invalid searchParams (cannot read both id and query)');
  }

  const { data: words, status } = useQuery({
    queryKey: ['words', query, id, include],
    queryFn: () => axios.get('/api/words', { params: { query, id, include } }).then((res) => res.data)
  });

  if (id) {
    return { word: words as Word, status };
  } else {
    return { words: words as Word[], status };
  }
};
