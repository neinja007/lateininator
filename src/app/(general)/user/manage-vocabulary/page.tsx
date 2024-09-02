'use client';
import Heading from '@/components/Heading';
import Skeleton from '@/components/Skeleton';
import { Collection, List, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cell from './components/Cell';
import CellContainer from './components/CellContainer';

const Page = () => {
  const collectionQuery = useQuery<(Collection & { lists: List[]; owner: User })[]>({
    queryKey: ['collections'],
    queryFn: () =>
      axios.get('/api/collection', { params: { saved: true, include: ['lists', 'owner'] } }).then((res) => res.data)
  });

  return (
    <div>
      <Heading>Wortschatz</Heading>
      <h3 className='text-center font-bold'>Ihre Kollektionen (z.B. Schulbücher)</h3>
      <div className='mt-4 h-44 resize-y overflow-y-scroll'>
        {!collectionQuery.isFetched && <Skeleton pulse />}
        {collectionQuery.isError && <div>Beim Laden der Kollektionen ist ein Fehler aufgetreten.</div>}
        {collectionQuery.isSuccess && (
          <CellContainer>
            {collectionQuery.data.map((collection) => (
              <Cell key={collection.id}>
                <h3 className='text-center'>
                  <span className='text-2xl font-medium'>{collection.name}</span>
                </h3>
                <p className='mt-3 flex items-end justify-between'>
                  <span className='mt-2'>Listen: {collection.lists.length}</span>
                  <span>
                    von <span className='font-medium text-yellow-500'>{collection.owner.name}</span>
                  </span>
                </p>
              </Cell>
            ))}
          </CellContainer>
        )}
      </div>
    </div>
  );
};

export default Page;
