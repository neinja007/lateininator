'use client';
import Heading from '@/components/Heading';
import { useState } from 'react';
import Button from '@/components/Button';
import { useCollections } from '@/hooks/database/queries/useCollections';
import { FullCollection } from '@/types/collection';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import Cell from './components/Cell';
import CellContainer from './components/CellContainer';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useToggleSavedCollection } from '@/hooks/database/mutations/useToggleSavedCollection';

const displays = ['saved', 'browse', 'manage'] as const;

const displayMap = {
  saved: 'Gespeicherte Kollektionen',
  browse: 'Alle Kollektionen',
  manage: 'Deine Kollektionen'
};

const Page = () => {
  const user = useUser();

  const [display, setDisplay] = useState<(typeof displays)[number]>('saved');
  const { data: collections, status } = useCollections<FullCollection[]>({
    status: display === 'saved' ? 'saved' : display === 'manage' ? 'owned' : 'all',
    include: ['lists', 'owner', 'savedBy']
  });

  const router = useRouter();

  const {
    mutate: toggleSavedCollection,
    variables: toggleSavedVariables,
    status: toggleSavedMutationStatus
  } = useToggleSavedCollection();

  const mutationIsPending = toggleSavedMutationStatus === 'pending';
  const affectedCollection = toggleSavedVariables;

  return (
    <div>
      <Heading>Wortschatz: {displayMap[display]}</Heading>
      <div className='grid grid-cols-3 gap-x-4'>
        {displays.map((d) => (
          <Button key={d} onClick={() => setDisplay(d)} color={d === display ? 'blue' : 'default'}>
            {displayMap[d]}
          </Button>
        ))}
      </div>
      <div className='my-10'>
        {status === 'error' && <FailToLoad />}
        <CellContainer>
          {status === 'pending' &&
            [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-24 w-full' />)}
          {status === 'success' && (
            <>
              {collections &&
                collections.map((collection: FullCollection) => {
                  const isSaved = collection.savedBy.some((s) => s.id === user.user?.id);

                  return (
                    <Cell
                      key={collection.id}
                      className={
                        affectedCollection === collection.id && mutationIsPending ? 'animate-pulse opacity-50' : ''
                      }
                      onClick={() => {
                        if (display === 'manage') {
                          router.push(`/user/collections/edit/${collection.id}`);
                        } else {
                          toggleSavedCollection(collection.id);
                        }
                      }}
                      lists={collection.lists.length}
                      name={collection.name}
                      owner={collection.owner.name}
                      buttonLabel={
                        display === 'manage'
                          ? 'Kollektion bearbeiten'
                          : isSaved
                            ? 'Kollektion entfernen'
                            : 'Kollektion speichern'
                      }
                      buttonColor={display === 'manage' ? 'blue' : isSaved ? 'red' : 'green'}
                    />
                  );
                })}
              {display === 'manage' && (
                <Cell
                  outlined
                  buttonColor='gray'
                  buttonLabel='Kollektion Erstellen'
                  onClick={() => router.push('/user/collections/new')}
                />
              )}
            </>
          )}
        </CellContainer>
      </div>
    </div>
  );
};

export default Page;
