import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Cell from './Cell';
import CellContainer from './CellContainer';
import { useRouter } from 'next/navigation';
import { useCollections } from '@/hooks/database/useCollections';

const ManageCollections = () => {
  const queryClient = useQueryClient();

  const { collections, status } = useCollections(true, ['lists', 'owner']);

  const {
    mutate,
    variables,
    status: mutationStatus
  } = useMutation({
    mutationFn: (collectionId: number) => axios.delete('/api/collection', { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: false }] });
      queryClient.invalidateQueries({ queryKey: ['collections', { saved: true }] });
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    }
  });

  const router = useRouter();

  return (
    <div className='my-4'>
      {status === 'error' && <FailToLoad />}
      <div className='mb-3'>
        {status === 'pending' || (status === 'success' && collections && collections.length > 0) ? (
          <p>Gespeicherte Kollektionen:</p>
        ) : (
          <p>Sie haben noch keine Kollektionen gespeichert.</p>
        )}
      </div>
      <CellContainer>
        {status === 'pending' &&
          [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-24 w-full' />)}
        {status === 'success' && (
          <>
            {collections &&
              collections.map((collection) => (
                <Cell
                  key={collection.id}
                  className={
                    variables && variables === collection.id && mutationStatus === 'pending'
                      ? 'animate-pulse opacity-50'
                      : ''
                  }
                  onClick={() => mutate(collection.id)}
                  lists={collection.lists.length}
                  name={collection.name}
                  owner={collection.owner.name}
                  buttonLabel='Lektion Entfernen'
                  buttonColor='red'
                />
              ))}
            <Cell outlined onClick={() => router.push('/user/collections/new')} />
          </>
        )}
      </CellContainer>
    </div>
  );
};

export default ManageCollections;
