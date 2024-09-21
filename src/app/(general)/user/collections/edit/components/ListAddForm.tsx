import Button from '@/components/Button';
import Input from '@/components/Input';
import { ListWithWords } from '@/types/collection';
import { useState } from 'react';

type ListAddFormProps = {
  lists: ListWithWords[];
  setLists: (lists: ListWithWords[]) => void;
};

const ListAddForm = ({ lists, setLists }: ListAddFormProps) => {
  const handleListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName.trim().length > 0 && !lists.some((list) => list.name === listName)) {
      setLists([...lists, { id: lists.length + 1, name: listName, words: [] }]);
      setListName('');
    }
  };

  const [listName, setListName] = useState('');

  return (
    <form onSubmit={handleListSubmit} className='mb-8 items-baseline space-y-3 md:flex'>
      <span className='mr-4'>Ihre Kollektion hat bereits {lists.length} Listen.</span>
      <br className='md:hidden' />
      <div className='mr-4'>
        <Input className='w-full max-w-64' value={listName} placeholder='Listenname' onChange={setListName} />
      </div>
      <Button
        type='submit'
        disabled={listName.trim().length === 0 || listName.length > 100 || lists.some((list) => list.name === listName)}
      >
        {lists.some((list) => list.name === listName) ? 'Liste existiert bereits' : 'Liste hinzufügen'}
      </Button>
    </form>
  );
};

export default ListAddForm;
