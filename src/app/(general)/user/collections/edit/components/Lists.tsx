import { ListWithWords } from '@/types/collection';
import ListDisplay from './ListDisplay';
import { useEffect, useState } from 'react';

type ListsProps = {
  lists: ListWithWords[];
  activeList: number | undefined;
  setActiveList: (id: number | undefined) => void;
  setLists: (lists: ListWithWords[]) => void;
};

const Lists = ({ lists, activeList, setActiveList, setLists }: ListsProps) => {
  const [editList, setEditList] = useState<number>();

  useEffect(() => {
    if (editList) {
      setActiveList(undefined);
    }
  }, [editList, setActiveList]);

  return (
    <div className={lists.length > 0 ? 'mt-4' : undefined}>
      <div className='flex flex-wrap gap-2'>
        {lists.map((list) => (
          <ListDisplay
            key={list.id}
            list={list}
            activeList={activeList}
            setActiveList={setActiveList}
            editList={editList}
            setEditList={setEditList}
            setLists={setLists}
            lists={lists}
          />
        ))}
      </div>
    </div>
  );
};

export default Lists;
