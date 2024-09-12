import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Word } from '@/types/word';

export const useWords = <T extends Word | Word[]>(parameters: {
  id?: number;
  include?: string[];
  query?: string | undefined;
}) => {
  const { id, include, query: searchQuery } = parameters;

  if (searchQuery && id) {
    throw new Error('Invalid searchParams (cannot read both id and query)');
  }

  const query = useQuery({
    queryKey: ['words', searchQuery, id, include],
    queryFn: () => axios.get('/api/words', { params: { searchQuery, id, include } }).then((res) => res.data)
  });

  if (id) {
    return { word: query.data as T, ...query };
  } else {
    return { words: query.data as T[], ...query };
  }
};
