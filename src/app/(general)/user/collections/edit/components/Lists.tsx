import { List as ListType } from '@prisma/client';
import ListDisplay from './ListDisplay';
import { useState } from 'react';

type ListsProps = {
  lists: Omit<ListType, 'createdAt' | 'updatedAt' | 'collectionId'>[];
  activeList: number | undefined;
  setActiveList: (id: number | undefined) => void;
  setLists: (lists: Omit<ListType, 'createdAt' | 'updatedAt' | 'collectionId'>[]) => void;
};

const Lists = ({ lists, activeList, setActiveList, setLists }: ListsProps) => {
  const [editList, setEditList] = useState<number>();

  return (
    <div className={lists.length > 0 ? 'mt-4' : undefined}>
      <div className='flex flex-wrap gap-x-4'>
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
