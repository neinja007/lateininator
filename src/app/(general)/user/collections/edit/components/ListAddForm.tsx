import Button from '@/components/Button';
import Input from '@/components/Input';
import { List } from '@prisma/client';

type ListAddFormProps = {
  listName: string;
  setListName: (listName: string) => void;
  lists: Omit<List, 'createdAt' | 'updatedAt'>[];
  handleListSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ListAddForm = ({ handleListSubmit, listName, lists, setListName }: ListAddFormProps) => {
  return (
    <form onSubmit={handleListSubmit} className='flex items-end'>
      <div className='flex items-baseline'>
        <span className='mr-4'>Ihre Kollektion hat bereits {lists.length} Listen.</span>
        <Input className='w-full max-w-64' value={listName} onChange={setListName} />
      </div>
      <Button
        className='ml-4'
        type='submit'
        disabled={listName.trim().length === 0 || listName.length > 100 || lists.some((list) => list.name === listName)}
      >
        {lists.some((list) => list.name === listName) ? 'Liste existiert bereits' : 'Liste hinzufügen'}
      </Button>
    </form>
  );
};

export default ListAddForm;
