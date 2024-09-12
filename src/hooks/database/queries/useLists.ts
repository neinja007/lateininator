import { Word } from '@/types/word';
import { Collection, List } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLists = (parameters: { include?: string[]; wordInclude?: string[] }) => {
  const { include, wordInclude } = parameters;

  const query = useQuery<(List & { words: Word[]; collection: Collection })[]>({
    queryKey: ['lists', include, wordInclude],
    queryFn: () => axios.get('/api/list', { params: { include, wordInclude } }).then((res) => res.data)
  });

  return query;
};
