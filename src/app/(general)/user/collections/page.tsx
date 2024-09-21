'use client';
import Heading from '@/components/Heading';
import { useCollections } from '@/hooks/database/queries/useCollections';
import { FullCollection } from '@/types/collection';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import Cell from './components/Cell';
import CellContainer from './components/CellContainer';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useToggleSavedCollection } from '@/hooks/database/mutations/useToggleSavedCollection';
import Hr from '@/components/Hr';
import Info from '@/components/Info';

const Page = () => {
  const user = useUser();

  const { data: collections, status } = useCollections<FullCollection[]>({
    status: 'all',
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

  const savedCollections = collections?.filter((collection) => collection.savedBy.some((s) => s.id === user.user?.id));
  const unSavedCollections = collections?.filter(
    (collection) => !collection.savedBy.some((s) => s.id === user.user?.id)
  );

  return (
    <div>
      <Heading heading='Wortschatz' />
      <div className='my-10'>
        {status === 'error' && <FailToLoad />}
        <div>
          <h2 className='mb-2 flex items-center justify-center text-lg'>
            Aktivierte Kollektionen (maximal 3){' '}
            <Info size={5} heading='Aktivierte Kollektionen'>
              Es können <b>bis zu 3 Kollektionen</b> gespeichert werden. Diese stehen Ihnen in den Trainern zur
              Verfügung.
            </Info>
          </h2>
          <CellContainer>
            {!savedCollections &&
              [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-32 w-full' />)}
            {savedCollections &&
              savedCollections.map((collection) => (
                <Cell
                  key={collection.id}
                  className={
                    affectedCollection === collection.id && mutationIsPending ? 'animate-pulse opacity-50' : ''
                  }
                  active={true}
                  editable={collection.owner.id === user.user?.id}
                  onToggleEditable={() => router.push(`/user/collections/edit/${collection.id}`)}
                  onToggleActive={() => toggleSavedCollection(collection.id)}
                  lists={collection.lists.length}
                  name={collection.name}
                  owner={collection.owner.name}
                  owned={collection.owner.id === user.user?.id}
                />
              ))}
            {[...Array(3 - (savedCollections ? savedCollections.length : 3))].map((i) => (
              <Cell key={i} outlined />
            ))}
          </CellContainer>
        </div>
        {unSavedCollections && unSavedCollections.length > 0 && (
          <>
            <Hr className='my-5' />
            <div>
              <h2 className='mb-2 flex items-center justify-center text-lg'>
                Weitere Kollektionen{' '}
                <Info size={5} heading='Weitere Kollektionen'>
                  Diese Kollektionen sind entweder öffentlich oder von Ihnen erstellt, aber <b>nicht aktiviert</b>. Sie
                  können diese jederzeit aktivieren, um sie in den Trainern verwenden zu können.
                </Info>
              </h2>
              <CellContainer>
                {status === 'pending' &&
                  [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-32 w-full' />)}
                {status === 'success' && (
                  <>
                    {unSavedCollections &&
                      unSavedCollections.map((collection: FullCollection) => {
                        const isActive = collection.savedBy.some((s) => s.id === user.user?.id);
                        const isEditable = collection.owner.id === user.user?.id;

                        return (
                          <Cell
                            key={collection.id}
                            className={
                              affectedCollection === collection.id && mutationIsPending
                                ? 'animate-pulse opacity-50'
                                : ''
                            }
                            active={isActive}
                            editable={isEditable}
                            onToggleEditable={() => router.push(`/user/collections/edit/${collection.id}`)}
                            onToggleActive={() => toggleSavedCollection(collection.id)}
                            lists={collection.lists.length}
                            name={collection.name}
                            owner={collection.owner.name}
                            owned={collection.owner.id === user.user?.id}
                          />
                        );
                      })}
                  </>
                )}
              </CellContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
