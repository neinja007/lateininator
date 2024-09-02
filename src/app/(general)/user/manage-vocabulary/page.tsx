'use client';

import Heading from '@/components/Heading';
import Hr from '@/components/Hr';
import Skeleton from '@/components/Skeleton';
import { Collection, List } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cell from './components/Cell';
import CellContainer from './components/CellContainer';

const Page = () => {
  const collectionQuery = useQuery<Collection[]>({
    queryKey: ['collections'],
    queryFn: () => axios.get('/api/collection', { params: { saved: true } }).then((res) => res.data)
  });

  const listQuery = useQuery<List[]>({
    queryKey: ['lists'],
    queryFn: () => axios.get('/api/list', { params: { saved: true } }).then((res) => res.data)
  });

  return (
    <div>
      <Heading>Wortschatz</Heading>
      Ihre Kollektionen (z.B. Schulbücher):
      <div className='mt-4 h-44 overflow-y-scroll'>
        {!collectionQuery.isFetched && <Skeleton pulse />}
        {collectionQuery.isError && <div>Beim Laden der Kollektionen ist ein Fehler aufgetreten.</div>}
        {collectionQuery.isSuccess && (
          <CellContainer>
            {collectionQuery.data.map((collection) => (
              <Cell key={collection.id}>
                <h3 className='font-bold'>{collection.name}</h3>
              </Cell>
            ))}
          </CellContainer>
        )}
      </div>
      <Hr className='my-5' />
      Ihre Listen (z.B. Lektionen eines Schulbuchs):
      <div className='mt-4 h-44 overflow-y-scroll'>
        {!listQuery.isFetched && <Skeleton pulse />}
        {listQuery.isError && <div>Beim Laden der Listen ist ein Fehler aufgetreten.</div>}
        {listQuery.isSuccess && (
          <CellContainer>
            {listQuery.data.map((list) => (
              <Cell key={list.id}>{list.name}</Cell>
            ))}
          </CellContainer>
        )}
      </div>
    </div>
  );
};

export default Page;
