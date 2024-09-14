import { Collection } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCollections = <T extends Collection | Collection[]>(parameters: {
  status: 'saved' | 'all' | 'owned';
  include?: ('lists' | 'owner' | 'savedBy')[];
  listInclude?: ('words' | 'collection')[];
  wordInclude?: ('adjective' | 'noun' | 'verb' | 'derivative' | 'lists' | 'base')[];
  id?: number;
  enabled?: boolean;
}) => {
  const { status, include, id, listInclude, wordInclude, enabled } = parameters;

  const query = useQuery<T>({
    queryKey: ['collections', { id, status, include, listInclude, wordInclude }],
    queryFn: () =>
      axios
        .get('/api/collection', { params: { id, status, include, listInclude, wordInclude } })
        .then((res) => res.data),
    enabled
  });

  return query;
};
