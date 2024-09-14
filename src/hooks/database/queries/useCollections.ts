import { Collection } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCollections = <T extends Collection | Collection[]>(parameters: {
  saved?: boolean;
  include?: ('lists' | 'owner' | 'savedBy')[];
  listInclude?: ('words' | 'collection')[];
  wordInclude?: ('adjective' | 'noun' | 'verb' | 'derivative' | 'lists' | 'base')[];
  id?: number;
  enabled?: boolean;
}) => {
  const { saved, include, id, listInclude, wordInclude, enabled } = parameters;

  const query = useQuery<T>({
    queryKey: ['collections', { id, saved, include, listInclude, wordInclude }],
    queryFn: () =>
      axios
        .get('/api/collection', { params: { id, saved, include, listInclude, wordInclude } })
        .then((res) => res.data),
    enabled
  });

  return query;
};
