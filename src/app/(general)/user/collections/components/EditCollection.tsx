'use client';

import { List } from '@prisma/client';
import { useState } from 'react';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const [name, setName] = useState('');
  const [lists, setLists] = useState<List[]>([]);
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');

  const collectionIsNew = !collectionId;

  return (
    <div>
      {/* <span>Kollektion {collectionIsNew ? 'erstellen' : 'bearbeiten'}</span>
      <Hr className='my-5' />
      <div className='grid grid-cols-3 gap-5'>
        <div>
          <Input className='w-full' label='Name' value={name} onChange={setName} />
          <Input className='w-full' label='Beschreibung' value={description} onChange={setDescription} />
        </div>
        <div className='col-span-2'>
          {lists.length > 0 && (
            <>
              <span>Listen:</span>
              <div>
                {lists.map((list) => (
                  <div key={list.id}>{list.name}</div>
                ))}
              </div>
            </>
          )}
          <div className='flex items-end'>
            <Input className='w-full max-w-64' label='Liste hinzufügen' value={listName} onChange={setListName} />
            <Button
              className='ml-4'
              onClick={() => {
                setLists([...lists, { id: lists.length + 1, name: listName, collectionId: collectionId ?? 0 }]);
                setListName('');
              }}
            >
              Liste hinzufügen
            </Button>
          </div>
        </div>
      </div> */}
      Noch nicht implementiert!
    </div>
  );
};

export default EditCollection;
