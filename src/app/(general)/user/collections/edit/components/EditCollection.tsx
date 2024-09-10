'use client';
import Input from '@/components/Input';
import { useState } from 'react';
import Hr from '@/components/Hr';
import { List } from '@prisma/client';
import { Word } from '@/types/word';
import BasicDataEditor from './BasicDataEditor';
import ListAddForm from './ListAddForm';
import Lists from './Lists';
import AddWords from './AddWords';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const [name, setName] = useState('');
  const [lists, setLists] = useState<Omit<List, 'createdAt' | 'updatedAt' | 'collectionId'>[]>([]);
  const [description, setDescription] = useState('');
  const [activeList, setActiveList] = useState<number>();

  const [words, setWords] = useState<Word[]>([]);

  const collectionIsNew = !collectionId;

  return (
    <div>
      <Input className='w-full' label='Name der Kollektion' value={name} onChange={setName} />
      <BasicDataEditor name={name} description={description} setName={setName} setDescription={setDescription} />
      <Hr className='my-4' />
      <div>
        <ListAddForm lists={lists} setLists={setLists} />
        <Lists lists={lists} activeList={activeList} setActiveList={setActiveList} setLists={setLists} />
      </div>
      {activeList && (
        <AddWords listName={lists.find((l) => l.id === activeList)?.name || ''} words={words} setWords={setWords} />
      )}
    </div>
  );
};

export default EditCollection;
