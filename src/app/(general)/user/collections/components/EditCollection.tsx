'use client';

import Input from '@/components/Input';
import { useEffect, useState } from 'react';
import Hr from '@/components/Hr';
import BasicDataEditor from '../edit/components/BasicDataEditor';
import ListAddForm from '../edit/components/ListAddForm';
import Lists from '../edit/components/Lists';
import AddWords from '../edit/components/AddWords';
import { useUpdateCollection } from '@/hooks/database/mutations/useUpdateCollection';
import Button from '@/components/Button';
import { Word } from '@/types/word';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { collectionSchema } from '@/schemas/collectionSchema';
import { useCollections } from '@/hooks/database/queries/useCollections';
import { FullCollection, ListWithWords } from '@/types/collection';
import Skeleton from '@/components/Skeleton';
import FailToLoad from '@/components/FailToLoad';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const newCollection = !collectionId;

  const { data: collection, status: collectionStatus } = useCollections<FullCollection>({
    status: 'owned',
    id: collectionId,
    include: ['lists', 'owner', 'savedBy'],
    listInclude: ['words'],
    enabled: !newCollection
  });

  const [name, setName] = useState('');
  const [lists, setLists] = useState<(ListWithWords & { new?: boolean })[]>([]);
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [activeList, setActiveList] = useState<number>();

  useEffect(() => {
    if (collection) {
      setName(collection.name);
      setDescription(collection.description || '');
      setIsPublic(!collection.private);
      setLists(collection.lists);
      setActiveList(collection.lists[0]?.id);
    }
  }, [collection]);

  const { updateCollection, status } = useUpdateCollection();

  if (!newCollection && collectionStatus === 'pending') {
    return <Skeleton pulse customSize className='h-24 w-full' />;
  }

  if (!newCollection && collectionStatus === 'error') {
    return <FailToLoad />;
  }

  const submit = () => {
    const collection = {
      id: collectionId,
      name,
      description,
      private: !isPublic,
      lists: lists.map((l) => ({
        id: l.new ? undefined : l.id,
        name: l.name,
        words: l.words.map((w) => w.id)
      }))
    };

    if (collectionSchema.safeParse(collection).success) {
      updateCollection(collection);
    } else {
      throw new Error('Collection is not valid');
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
