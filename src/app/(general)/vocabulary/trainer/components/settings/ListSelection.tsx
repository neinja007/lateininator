import Button from '@/components/Button';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { Word } from '@/types/word';
import { Collection, List } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Book } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type ListSelectionProps = {
  selectedWords: Word[];
  setSelectedWords: Dispatch<SetStateAction<Word[]>>;
};

const ListSelection = ({ selectedWords, setSelectedWords }: ListSelectionProps) => {
  const { data: lists, status } = useQuery<(List & { words: Word[]; collection: Collection })[]>({
    queryKey: ['lists'],
    queryFn: () =>
      axios
        .get('/api/list', { params: { include: ['words', 'collection'], wordInclude: ['noun', 'verb', 'adjective'] } })
        .then((res) => res.data)
  });

  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<number>();

  const filteredLists = useMemo(
    () => lists?.filter((list) => selectedCollection === list.collection.id) || [],
    [lists, selectedCollection]
  );

  useEffect(() => {
    if (status === 'success') {
      setCollections(
        lists.reduce((acc: Collection[], curr) => {
          if (!acc.find((collection) => collection.id === curr.collection.id)) {
            acc.push(curr.collection);
          }
          return acc;
        }, [])
      );
    }
  }, [lists, status]);

  const [selectedLists, setSelectedLists] = useState<number[]>([]);

  useEffect(() => {
    setSelectedWords(
      filteredLists
        .filter((list) => selectedLists.includes(list.id))
        .reduce((acc: Word[], cur) => {
          acc.push(...cur.words);
          return acc;
        }, [])
    );
  }, [filteredLists, selectedLists, setSelectedWords]);

  return (
    <>
      <div className='mb-3 grid-cols-2 md:grid lg:grid-cols-3'>
        <p className='lg:col-span-2'>Wähle aus, welche Wörter du lernen möchtest:</p>
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            color={
              status === 'success' && selectedLists.length === filteredLists.length && selectedCollection
                ? 'blue'
                : 'default'
            }
            onClick={() => setSelectedLists(status === 'success' ? filteredLists.map((list) => list.id) : [])}
            disabled={status !== 'success' || filteredLists.length === 0}
          >
            Alle auswählen
          </Button>
          <Button
            color={selectedLists.length === 0 && status === 'success' && selectedCollection ? 'blue' : 'default'}
            onClick={() => setSelectedLists([])}
            disabled={status !== 'success' || filteredLists.length === 0}
          >
            Alle abwählen
          </Button>
        </div>
      </div>
      <div>
        {(status !== 'success' || collections.length > 0) && (
          <p className='mb-2'>
            Gespeicherte Kollektionen
            {(status !== 'success' || collections.length > 0) && (
              <span>
                {' '}
                (können bei der{' '}
                <Link href={'/user/manage-vocabulary'} className='font-medium text-blue-500 hover:underline'>
                  Wortschatz-Verwaltung
                </Link>{' '}
                bearbeitet werden)
              </span>
            )}
            :
          </p>
        )}
        {status === 'error' && <FailToLoad />}
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {status === 'pending' &&
            [...Array(3)].map((_, i) => <Skeleton pulse key={i} customSize className='h-9 w-full' />)}
          {status === 'success' &&
            (collections.length > 0 ? (
              collections.map((collection) => (
                <Button
                  key={collection.id}
                  color={selectedCollection === collection.id ? 'blue' : 'default'}
                  onClick={() => setSelectedCollection((prev) => (prev === collection.id ? undefined : collection.id))}
                >
                  {collection.name}
                </Button>
              ))
            ) : (
              <div className='col-span-full'>
                Keine gespeicherten Kollektionen gefunden. Sie können bei der{' '}
                <Link href={'/user/manage-vocabulary'} className='font-medium text-blue-500 hover:underline'>
                  Wortschatz-Verwaltung
                </Link>{' '}
                ein paar hinzufügen.
              </div>
            ))}
        </div>
      </div>
      {(status !== 'success' || collections.length > 0) && (
        <div className='mt-3'>
          {(status !== 'success' || filteredLists.length !== 0) && <p className='mb-2'>Listen:</p>}
          {status === 'error' && <FailToLoad />}
          <div className='grid h-fit max-h-80 grid-cols-2 gap-3 overflow-hidden overflow-y-scroll scroll-smooth sm:grid-cols-4 md:grid-cols-5'>
            {status === 'pending' &&
              [...Array(15)].map((_, i) => <Skeleton pulse key={i} customSize className='h-9 w-full' />)}
            {status === 'success' && filteredLists.length > 0 ? (
              filteredLists.map((list) => (
                <Button
                  key={list.id}
                  color={selectedLists.includes(list.id) ? 'blue' : 'default'}
                  onClick={() =>
                    setSelectedLists((prev) =>
                      prev.includes(list.id) ? prev.filter((l) => l !== list.id) : [...prev, list.id]
                    )
                  }
                  className='flex items-center gap-x-2'
                >
                  <Book className='w-4' />
                  {list.name}
                </Button>
              ))
            ) : (
              <div className='col-span-full'>Wähle eine Kollektion aus, um Listen anzuzeigen</div>
            )}
          </div>
        </div>
      )}
      {status === 'success' && (
        <p>
          Es wurden <b className='text-blue-500'>{selectedWords.length} Wörter</b> ausgewählt.
        </p>
      )}
    </>
  );
};

export default ListSelection;
