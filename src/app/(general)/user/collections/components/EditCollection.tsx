'use client';

import Input from '@/components/Input';
import { useState } from 'react';
import Hr from '@/components/Hr';
import BasicDataEditor from '../edit/components/BasicDataEditor';
import ListAddForm from '../edit/components/ListAddForm';
import Lists from '../edit/components/Lists';
import AddWords from '../edit/components/AddWords';
import { useUpdateCollection } from '@/hooks/database/mutations/useUpdateCollection';
import Button from '@/components/Button';
import { ListWithWords } from '../types';
import { Word } from '@/types/word';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { collectionSchema } from '@/schemas/collectionSchema';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const collectionIsNew = !collectionId;

  const [name, setName] = useState('');
  const [lists, setLists] = useState<ListWithWords[]>([]);
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [activeList, setActiveList] = useState<number>();

  const { updateCollection, status } = useUpdateCollection();

  const submit = () => {
    const collection = {
      name,
      description,
      private: !isPublic,
      lists: lists.map((l) => ({
        id: l.id,
        name: l.name,
        words: l.words.map((w) => w.id)
      }))
    };

    if (collectionSchema.safeParse(collection).success) {
      console.log('collection is valid');
      updateCollection(collection);
    } else {
      console.log(collectionSchema.safeParse(collection).error);
    }
  };

  const setWords = (words: Word[]) => {
    setLists((prev) =>
      prev.map((l) => {
        if (l.id === activeList) {
          return { ...l, words };
        }
        return l;
      })
    );
  };

  return (
    <div>
      <div className='mb-3 flex items-center justify-between gap-4'>
        <CheckboxWithLabel label='Kollektion veröffentlichen' checked={isPublic} handleChange={setIsPublic} />
        <Button color='green' disabled={status === 'pending'} onClick={submit}>
          Speichern
        </Button>
      </div>
      <Input className='w-full' label='Name der Kollektion' value={name} onChange={setName} />
      <BasicDataEditor name={name} description={description} setName={setName} setDescription={setDescription} />
      <Hr className='my-4' />
      <div>
        <ListAddForm lists={lists} setLists={setLists} />
        <Lists lists={lists} activeList={activeList} setActiveList={setActiveList} setLists={setLists} />
      </div>
      {activeList && (
        <AddWords
          listName={lists.find((l) => l.id === activeList)?.name || ''}
          words={lists.find((l) => l.id === activeList)?.words || []}
          setWords={setWords}
        />
      )}
    </div>
  );
};

export default EditCollection;
