'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { List } from '@prisma/client';
import { useId, useState } from 'react';
import ui from '@/styles/ui.module.css';
import clsx from 'clsx';
import { X } from 'lucide-react';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const [name, setName] = useState('');
  const [lists, setLists] = useState<Omit<List, 'createdAt' | 'updatedAt'>[]>([]);
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');

  const collectionIsNew = !collectionId;

  const id = useId();

  const handleListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName.trim().length > 0 && !lists.some((list) => list.name === listName)) {
      setLists([...lists, { id: lists.length + 1, name: listName, collectionId: collectionId ?? 0 }]);
      setListName('');
    }
  };

  return (
    <div className='grid grid-cols-3 gap-5'>
      <div className='border-r pr-5 dark:border-gray-700'>
        <Input className='w-full' label='Name' value={name} onChange={setName} />
        <div className='mt-4'>
          <label htmlFor={id} className='block'>
            Beschreibung
          </label>
          <textarea
            id={id}
            className={clsx(ui.basic, 'mt-1 w-full')}
            placeholder='Beschreibung'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='col-span-2'>
        <form onSubmit={handleListSubmit} className='flex items-end'>
          <Input className='w-full max-w-64' label='Liste hinzufügen' value={listName} onChange={setListName} />
          <Button
            className='ml-4'
            type='submit'
            disabled={
              listName.trim().length === 0 || listName.length > 100 || lists.some((list) => list.name === listName)
            }
          >
            {lists.some((list) => list.name === listName) ? 'Liste existiert bereits' : 'Liste hinzufügen'}
          </Button>
        </form>
        <div className='mt-4'>
          <span>Listen (können im nächsten Schritt bearbeitet werden):</span>
          <div className='flex flex-wrap gap-x-4'>
            {lists.map((list) => (
              <div key={list.id} className='flex items-center'>
                {list.name}{' '}
                <X
                  onClick={() => {
                    setLists(lists.filter((l) => l.id !== list.id));
                  }}
                  className='ml-1 h-5 w-5 cursor-pointer rounded-full bg-red-400 p-0.5 dark:bg-red-700'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCollection;
