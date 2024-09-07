import { Collection, List, User } from '@prisma/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import CellContainer from './CellContainer';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import Cell from './Cell';
import clsx from 'clsx';

const BrowseCollections = () => {
  const queryClient = useQueryClient();
  const { status, data: collections } = useQuery<(Collection & { lists: List[]; owner: User })[]>({
    queryKey: ['collections', { saved: false }],
    queryFn: () =>
      axios.get('/api/collection', { params: { saved: false, include: ['lists', 'owner'] } }).then((res) => res.data)
  });

  const {
    mutate,
    variables,
    error,
    status: mutationStatus
  } = useMutation({
    mutationFn: (collectionId: number) => axios.patch('/api/collection', undefined, { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: false }] });
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: true }] });
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    }
  });

  return (
    <div className='mt-5'>
      <div
        className={clsx(
          'flex items-baseline justify-between',
          status === 'success' && collections.length > 0 && 'mb-3'
        )}
      >
        {status === 'pending' || (status === 'success' && collections.length > 0) ? (
          <p className='mb-2'>Alle öffentliche Kollektionen:</p>
        ) : (
          <p>Es konnten keine öffentliche Kollektionen gefunden werden, die Sie noch nicht gespeichert haben.</p>
        )}
      </div>
      {status === 'error' && <FailToLoad />}
      <CellContainer>
        {status === 'pending' &&
          [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-24 w-full' />)}
        {status === 'success' &&
          collections.map((collection) => (
            <Cell
              key={collection.id}
              onClick={() => mutate(collection.id)}
              className={
                variables && variables === collection.id && mutationStatus === 'pending'
                  ? 'animate-pulse opacity-50'
                  : undefined
              }
              buttonLabel='Lektion Hinzufügen'
              lists={collection.lists.length}
              name={collection.name}
              owner={collection.owner.name}
              buttonColor='green'
            />
          ))}
      </CellContainer>
      {error && error.message}
    </div>
  );
};

export default BrowseCollections;
