import Button from '@/components/Button';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { MainWordType } from '@/types/appConstants';
import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { Collection, List } from '@prisma/client';
import { Book } from 'lucide-react';
import Link from '@/components/Link';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import { useCollections } from '@/hooks/database/queries/useCollections';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { COLORS } from '@/constants/other';

type ListSelectionProps = {
  selectedWords: Word[];
  setSelectedWords: Dispatch<SetStateAction<Word[]>>;
  onlyAcceptType?: MainWordType;
};

const ListSelection = ({ selectedWords, setSelectedWords, onlyAcceptType }: ListSelectionProps) => {
  const { data: collections, status } = useCollections<(Collection & { lists: (List & { words: Word[] })[] })[]>({
    status: 'saved',
    wordInclude: ['adjective', 'noun', 'verb'],
    include: ['lists'],
    listInclude: ['words']
  });

  const primaryColor = usePrimaryColor(true);

  const [excludeExceptionalWords, setExcludeExceptionalWords] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<number>();

  const filteredLists = useMemo(
    () => collections?.find((collection) => selectedCollection === collection.id)?.lists || [],
    [collections, selectedCollection]
  );

  const [selectedLists, setSelectedLists] = useState<number[]>([]);

  useEffect(() => {
    setSelectedLists([]);
  }, [selectedCollection]);

  useEffect(() => {
    setSelectedWords(
      filteredLists
        .filter((list) => selectedLists.includes(list.id))
        .reduce((acc: Word[], cur) => {
          acc.push(
            ...cur.words.filter(
              (word) =>
                (!onlyAcceptType || word.type === onlyAcceptType) &&
                (!excludeExceptionalWords || !word.exception || Object.keys(word.exception).length === 0)
            )
          );
          return acc;
        }, [])
    );
  }, [excludeExceptionalWords, filteredLists, onlyAcceptType, selectedLists, setSelectedWords]);

  useEffect(() => {
    setSelectedCollection(collections?.[0]?.id);
  }, [collections]);

  return (
    <>
      <p>Wählen Sie aus, welche Wörter Sie lernen möchten:</p>
      <div>
        {(status !== 'success' || collections.length > 0) && (
          <p className='mb-2'>
            Aktivierte Kollektionen
            {(status !== 'success' || collections.length > 0) && (
              <span>
                {' '}
                (können bei der <Link href={'/user/collections'}>Wortschatz-Verwaltung</Link> bearbeitet werden)
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
                  color={selectedCollection === collection.id ? primaryColor() : 'default'}
                  onClick={() => setSelectedCollection((prev) => (prev === collection.id ? undefined : collection.id))}
                >
                  {collection.name}
                </Button>
              ))
            ) : (
              <div className='col-span-full text-yellow-500'>
                Keine aktivierten Kollektionen gefunden. Sie können bei der{' '}
                <Link href='/user/collections'>Wortschatz-Verwaltung</Link> ein paar hinzufügen.
              </div>
            ))}
        </div>
      </div>
      {(status !== 'success' || collections.length > 0) && (
        <div className='mt-3'>
          {(status !== 'success' || filteredLists.length !== 0) && (
            <div className='mb-3 grid-cols-2 items-baseline sm:grid lg:grid-cols-3'>
              <p className='mb-2 mr-5 lg:col-span-2'>Listen:</p>
              <div className='grid flex-grow grid-cols-2 gap-x-4'>
                <Button
                  color={
                    status === 'success' && selectedLists.length === filteredLists.length && selectedCollection
                      ? primaryColor()
                      : 'default'
                  }
                  onClick={() => setSelectedLists(status === 'success' ? filteredLists.map((list) => list.id) : [])}
                  disabled={status !== 'success' || filteredLists.length === 0}
                >
                  Alle auswählen
                </Button>
                <Button
                  color={
                    selectedLists.length === 0 && status === 'success' && selectedCollection
                      ? primaryColor()
                      : 'default'
                  }
                  onClick={() => setSelectedLists([])}
                  disabled={status !== 'success' || filteredLists.length === 0}
                >
                  Alle abwählen
                </Button>
              </div>
            </div>
          )}
          {status === 'error' && <FailToLoad />}
          <div className='mt-5 grid h-fit max-h-80 grid-cols-2 gap-3 overflow-hidden overflow-y-scroll scroll-smooth sm:grid-cols-4 md:grid-cols-5'>
            {status === 'pending' &&
              [...Array(15)].map((_, i) => <Skeleton pulse key={i} customSize className='h-9 w-full' />)}
            {status === 'success' && filteredLists.length > 0 ? (
              filteredLists.map((list) => (
                <Button
                  key={list.id}
                  color={selectedLists.includes(list.id) ? primaryColor() : 'default'}
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
              <div className='col-span-full'>Wählen Sie eine Kollektion aus, um deren Listen anzuzeigen</div>
            )}
          </div>
        </div>
      )}
      {status === 'success' && (
        <div className='mt-5 grid items-center gap-3 sm:grid-cols-2'>
          <p className='order-2 sm:order-none'>
            Es wurde{selectedWords.length !== 1 && 'n'}{' '}
            <b className={COLORS[primaryColor()].text}>
              {selectedWords.length === 0 ? 'keine' : selectedWords.length}{' '}
              {onlyAcceptType
                ? MAPPER.extended.type[selectedWords.length !== 1 ? 'plural' : 'singular'][onlyAcceptType]
                : selectedWords.length !== 1
                  ? 'Wörter'
                  : 'Wort'}
            </b>{' '}
            ausgewählt.
          </p>
          <div className='sm:text-right'>
            <CheckboxWithLabel
              label='Wörter mit Ausnahmen ausschließen'
              checked={excludeExceptionalWords}
              handleChange={setExcludeExceptionalWords}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ListSelection;
