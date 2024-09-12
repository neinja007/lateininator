import { Collection } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCollections = <T extends Collection>(parameters: {
  saved?: boolean;
  include?: ('lists' | 'owner' | 'savedBy')[];
  listInclude?: ('words' | 'collection')[];
  id?: number;
}) => {
  const { saved, include, id, listInclude } = parameters;

  const query = useQuery({
    queryKey: ['collections', { id, saved, include, listInclude }],
    queryFn: () => axios.get('/api/collection', { params: { id, saved, include, listInclude } }).then((res) => res.data)
  });

  if (id) {
    return { ...query, data: query.data as T };
  } else {
    return { ...query, data: query.data as T[] };
  }
};
