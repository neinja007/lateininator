import Button from '@/components/Button';
import FailToLoad from '@/components/FailToLoad';
import Skeleton from '@/components/Skeleton';
import { Word } from '@/types/word';
import { List } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Book } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ListSelectionProps = {
  selectedWords: Word[];
  setSelectedWords: Dispatch<SetStateAction<Word[]>>;
};

const ListSelection = ({ selectedWords, setSelectedWords }: ListSelectionProps) => {
  const { data: lists, status } = useQuery<(List & { words: Word[] })[]>({
    queryKey: ['lists'],
    queryFn: () =>
      axios
        .get('/api/list', { params: { include: ['words'], wordInclude: ['noun', 'verb', 'adjective'] } })
        .then((res) => res.data)
  });

  const [selectedLists, setSelectedLists] = useState<(List & { words: Word[] })[]>([]);

  useEffect(() => {
    setSelectedWords(
      selectedLists.reduce((acc: Word[], cur) => {
        acc.push(...cur.words);
        return acc;
      }, [])
    );
  }, [selectedLists, setSelectedWords]);

  return (
    <>
      <div className='grid-cols-2 md:grid lg:grid-cols-3'>
        <p className='mb-3 lg:col-span-2'>Wähle aus, welche Lektionen du lernen möchtest:</p>
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            color={status === 'success' && selectedLists.length === lists.length ? 'blue' : 'default'}
            onClick={() => setSelectedLists(status === 'success' ? lists : [])}
            disabled={status !== 'success'}
          >
            Alle auswählen
          </Button>
          <Button
            color={selectedLists.length === 0 && status === 'success' ? 'blue' : 'default'}
            onClick={() => setSelectedLists([])}
            disabled={status !== 'success'}
          >
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid h-fit max-h-80 grid-cols-2 gap-3 overflow-hidden overflow-y-scroll scroll-smooth py-5 sm:grid-cols-4 md:grid-cols-5'>
        {status === 'pending' &&
          [...Array(15)].map((_, i) => <Skeleton pulse key={i} customSize className='h-9 w-full' />)}
        {status === 'error' && <FailToLoad />}
        {status === 'success' &&
          lists.map((list) => (
            <Button
              key={list.id}
              color={selectedLists.map((list) => list.id).includes(list.id) ? 'blue' : 'default'}
              onClick={() =>
                setSelectedLists((prev) => (prev.includes(list) ? prev.filter((t) => t !== list) : [...prev, list]))
              }
              className='flex items-center gap-x-2'
            >
              <Book className='w-4' />
              {list.name}
            </Button>
          ))}
      </div>
      {status === 'success' && (
        <p>
          Es wurden <b className='text-blue-500'>{selectedWords.length} Wörter</b> ausgewählt.
        </p>
      )}
    </>
  );
};

export default ListSelection;
