import Button from '@/components/Button';
import { lists } from '@/data/lists';
import { List } from '@/types';
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
      <div className='grid grid-cols-3'>
        <p className='col-span-2'>Wähle aus, welche Lektionen du lernen möchtest:</p>
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
      <div className='grid grid-cols-8 gap-4'>
        {lists.map((list, i) => (
          <Button
            key={i}
            color={selectedLists.includes(list) ? 'blue' : 'default'}
            onClick={() =>
              setSelectedLists((prev) => (prev.includes(list) ? prev.filter((t) => t !== list) : [...prev, list]))
            }
          >
            list.name
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
