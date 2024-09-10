import { List as ListType } from '@prisma/client';
import List from './List';

type ListsProps = {
  lists: Omit<ListType, 'createdAt' | 'updatedAt'>[];
  activeList: number | undefined;
  setActiveList: (id: number | undefined) => void;
  editList: number | undefined;
  setEditList: (id: number | undefined) => void;
  setLists: (lists: Omit<ListType, 'createdAt' | 'updatedAt'>[]) => void;
};

const Lists = ({ lists, activeList, setActiveList, editList, setEditList, setLists }: ListsProps) => {
  return (
    <div className={lists.length > 0 ? 'mt-4' : undefined}>
      <div className='flex flex-wrap gap-x-4'>
        {lists.map((list) => (
          <List
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
