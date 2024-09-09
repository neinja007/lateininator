import CellContainer from './CellContainer';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import Cell from './Cell';
import clsx from 'clsx';
import { useCollections } from '@/hooks/database/queries/useCollections';
import { useSaveCollection } from '@/hooks/database/mutations/useSaveCollection';

const BrowseCollections = () => {
  const { collections, status } = useCollections(false, ['lists', 'owner']);

  const { mutate, variables, error, status: mutationStatus } = useSaveCollection();

  return (
    <div className='mt-5'>
      <div
        className={clsx(
          'flex items-baseline justify-between',
          status === 'success' && collections && collections.length > 0 && 'mb-3'
        )}
      >
        {status === 'pending' || (status === 'success' && collections && collections.length > 0) ? (
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
          collections &&
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
              description={collection.description ?? undefined}
            />
          ))}
      </CellContainer>
      {error && error.message}
    </div>
  );
};

export default BrowseCollections;
