import { Word } from '@/types/word';
import { Collection, List } from '@prisma/client';
import { useQuery, QueryStatus } from '@tanstack/react-query';
import axios from 'axios';

export const useLists = (
  include?: string[],
  wordInclude?: string[]
): {
  lists: (List & { words: Word[]; collection: Collection })[] | undefined;
  status: QueryStatus;
} => {
  const { data: lists, status } = useQuery<(List & { words: Word[]; collection: Collection })[]>({
    queryKey: ['lists', include, wordInclude],
    queryFn: () => axios.get('/api/list', { params: { include, wordInclude } }).then((res) => res.data)
  });

  return { lists: lists, status };
};
