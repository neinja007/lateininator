import { FullCollection } from '@/types/collection';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCollections = (parameters: { saved?: boolean; include?: string[]; id?: number }) => {
  const { saved, include, id } = parameters;

  const query = useQuery({
    queryKey: ['collections', { saved, include }],
    queryFn: () => axios.get('/api/collection', { params: { saved, include } }).then((res) => res.data)
  });

  if (id) {
    return { collection: query.data as FullCollection, ...query };
  } else {
    return { collections: query.data as FullCollection[], ...query };
  }
};
