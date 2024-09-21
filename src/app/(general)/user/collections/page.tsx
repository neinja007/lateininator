'use client';
import TutorialHeading from '@/components/TutorialHeading';
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

  return (
    <div>
      <TutorialHeading heading='Wortschatz'>
        Hier sind alle veröffentlichten <b>Kollektionen</b>, und jene, die Sie erstellt haben. Sie können bis zu{' '}
        <b>drei Kollektionen</b> aktivieren. Diese stehen Ihnen in den <b>Trainern</b> zur Verfügung.
      </TutorialHeading>
      <div className='my-10'>
        {status === 'error' && <FailToLoad />}
        <div>
          <h2 className='mb-2 text-center text-lg'>Gespeicherte Kollektionen (maximal 3)</h2>
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
        <Hr className='my-5' />
        <div>
          <h2 className='mb-2 text-center text-lg'>Alle verfügbaren Kollektionen:</h2>
          <CellContainer>
            {status === 'pending' &&
              [...Array(3)].map((_, i) => <Skeleton key={i} pulse customSize className='h-32 w-full' />)}
            {status === 'success' && (
              <>
                {collections &&
                  collections.map((collection: FullCollection) => {
                    const isActive = collection.savedBy.some((s) => s.id === user.user?.id);
                    const isEditable = collection.owner.id === user.user?.id;

                    return (
                      <Cell
                        key={collection.id}
                        className={
                          affectedCollection === collection.id && mutationIsPending ? 'animate-pulse opacity-50' : ''
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
      </div>
    </div>
  );
};

export default Page;
