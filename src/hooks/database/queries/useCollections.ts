import { Collection, List, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCollections = (saved: boolean, include?: string[]) => {
  const { status, data: collections } = useQuery<(Collection & { lists: List[]; owner: User })[]>({
    queryKey: ['collections', { saved, include }],
    queryFn: () => axios.get('/api/collection', { params: { saved, include } }).then((res) => res.data)
  });

  return { collections, status };
};
