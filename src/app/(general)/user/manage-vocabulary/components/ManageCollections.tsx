import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { Collection, List, User } from '@prisma/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Cell from './Cell';
import CellContainer from './CellContainer';
import { useState } from 'react';

type ManageCollectionsProps = {
  enableBrowseCollections: () => void;
  browseCollections: boolean;
};

const ManageCollections = ({ enableBrowseCollections, browseCollections }: ManageCollectionsProps) => {
  const [activeCollection, setActiveCollection] = useState<Collection & { lists: List[]; owner: User }>();

  const queryClient = useQueryClient();

  const { status, data: collections } = useQuery<(Collection & { lists: List[]; owner: User })[]>({
    queryKey: ['collections', { saved: true }],
    queryFn: () =>
      axios.get('/api/collection', { params: { saved: true, include: ['lists', 'owner'] } }).then((res) => res.data)
  });

  const {
    mutate,
    variables,
    status: mutationStatus
  } = useMutation({
    mutationFn: (collectionId: number) => axios.delete('/api/collection', { params: { id: collectionId } }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      queryClient.invalidateQueries({ queryKey: ['lists'] });
    }
  });

  return (
    <div className='my-4'>
      {status === 'error' && <FailToLoad />}
      <div className={(status === 'success' && collections.length > 0) || !browseCollections ? 'mb-3' : undefined}>
        {status === 'pending' || (status === 'success' && collections.length > 0) ? (
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
            {collections.map((collection) => (
              <Cell
                key={collection.id}
                className={
                  variables && variables === collection.id && mutationStatus === 'pending'
                    ? 'animate-pulse opacity-50'
                    : ''
                }
                onClick={() =>
                  setActiveCollection((prev) => (prev && prev.id === collection.id ? undefined : collection))
                }
                lists={collection.lists.length}
                name={collection.name}
                owner={collection.owner.name}
                buttonLabel='Lektion Entfernen'
                buttonVisible={activeCollection?.id === collection.id}
                buttonOnClick={() => mutate(collection.id)}
                buttonColor='red'
              />
            ))}
            {!browseCollections && <Cell outlined onClick={enableBrowseCollections} />}
          </>
        )}
      </CellContainer>
    </div>
  );
};

export default ManageCollections;
