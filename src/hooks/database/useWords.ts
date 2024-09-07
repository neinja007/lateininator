import { Word } from '@/types/word';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useWords = (id: number, include: string[]) => {
  const { data: word, status } = useQuery<Word>({
    queryKey: ['words', id, include],
    queryFn: () => axios.get('/api/words', { params: { id: id, include: include } }).then((res) => res.data)
  });
  return { word, status };
};
