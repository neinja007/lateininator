import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Word } from '@/types/word';

export const useWords = <T extends Word | Word[]>(parameters: {
  id?: number;
  include?: ('adjective' | 'noun' | 'verb' | 'derivative' | 'lists' | 'base')[];
  query?: string | undefined;
}) => {
  const { id, include, query: searchQuery } = parameters;

  if (searchQuery && id) {
    throw new Error('Invalid searchParams (cannot read both id and query)');
  }

  const query = useQuery<{ words: T; count: number | undefined } | T>({
    queryKey: ['words', searchQuery, id, include],
    queryFn: () => axios.get('/api/words', { params: { query: searchQuery, id, include } }).then((res) => res.data)
  });

  return {
    ...query,
    data: query.data && 'words' in query.data ? query.data.words : query.data,
    count: query.data && 'count' in query.data ? query.data.count : undefined
  };
};
