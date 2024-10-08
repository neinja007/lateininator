import Input from '@/components/Input';
import { ListWithWords } from '@/types/collection';
import clsx from 'clsx';
import { Edit, Check, X } from 'lucide-react';

type ListProps = {
  list: ListWithWords;
  activeList: number | undefined;
  setActiveList: (id: number | undefined) => void;
  editList: number | undefined;
  setEditList: (id: number | undefined) => void;
  setLists: (lists: ListWithWords[]) => void;
  lists: ListWithWords[];
};

const ListDisplay = ({ list, activeList, setActiveList, editList, setEditList, setLists, lists }: ListProps) => {
  return (
    <button
      key={list.id}
      className={clsx(
        'flex items-center rounded-lg border px-3 py-2',
        activeList === list.id
          ? 'border-blue-500 bg-blue-200 hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-600'
          : 'bg-gray-200 hover:border-gray-400 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      )}
      onClick={() => setActiveList(editList !== list.id ? list.id : undefined)}
    >
      {editList === list.id ? (
        <Input
          className='w-full'
          value={list.name}
          handleChange={(value) => setLists(lists.map((l) => (l.id === list.id ? { ...l, name: value } : l)))}
          onClick={(e) => {
            e.stopPropagation();
            setActiveList(undefined);
          }}
        />
      ) : (
        list.name
      )}
      {editList !== list.id ? (
        <Edit
          onClick={(e) => {
            e.stopPropagation();
            setEditList(list.id);
          }}
          className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-yellow-400 p-0.5 dark:bg-yellow-700'
        />
      ) : (
        <Check
          onClick={(e) => {
            e.stopPropagation();
            setEditList(undefined);
          }}
          className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-green-400 p-0.5 dark:bg-green-700'
        />
      )}
      <X
        onClick={(e) => {
          e.stopPropagation();
          setLists(lists.filter((l) => l.id !== list.id));
        }}
        className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-red-400 p-0.5 dark:bg-red-700'
      />
    </button>
  );
};

export default ListDisplay;
