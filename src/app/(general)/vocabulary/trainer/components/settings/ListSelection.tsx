import Button from '@/components/Button';
import { lists } from '@/data/lists';
import { List } from '@/types/other';
import { Book } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ListSelectionProps = {
  selectedIds: number[];
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
};

const ListSelection = ({ selectedIds, setSelectedIds }: ListSelectionProps) => {
  const [selectedLists, setSelectedLists] = useState<List[]>([]);

  useEffect(() => {
    let ids: number[] = [];
    selectedLists.forEach((list) => {
      ids = ids.concat(list.words);
    });

    setSelectedIds(ids);
  }, [selectedLists, setSelectedIds]);

  return (
    <>
      <div className='grid-cols-2 md:grid lg:grid-cols-3'>
        <p className='mb-3 lg:col-span-2'>Wähle aus, welche Lektionen du lernen möchtest:</p>
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            color={selectedLists.length === lists.length ? 'blue' : 'default'}
            onClick={() => setSelectedLists(lists)}
          >
            Alle auswählen
          </Button>
          <Button color={selectedLists.length === 0 ? 'blue' : 'default'} onClick={() => setSelectedLists([])}>
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid h-44 max-h-96 min-h-44 resize-y grid-cols-2 gap-2 overflow-hidden overflow-y-scroll scroll-smooth py-5 pr-4 sm:grid-cols-4 md:grid-cols-5 md:gap-4'>
        {[...lists, ...lists, ...lists].map((list, i) => (
          <Button
            key={i}
            color={selectedLists.includes(list) ? 'blue' : 'default'}
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
      <p>
        Es wurden <b className='text-blue-500'>{selectedIds.length} Wörter</b> ausgewählt.
      </p>
    </>
  );
};

export default ListSelection;
