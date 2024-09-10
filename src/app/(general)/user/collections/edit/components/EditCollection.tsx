'use client';
import Input from '@/components/Input';
import { useId, useState } from 'react';
import clsx from 'clsx';
import { Minus, Plus } from 'lucide-react';
import Hr from '@/components/Hr';
import { List } from '@prisma/client';
import { Word } from '@/types/word';
import { useWords } from '@/hooks/database/queries/useWords';
import BasicDataEditor from './BasicDataEditor';
import ListAddForm from './ListAddForm';
import Lists from './Lists';

type EditCollectionProps = {
  collectionId: number | undefined;
};

const EditCollection = ({ collectionId }: EditCollectionProps) => {
  const [name, setName] = useState('');
  const [lists, setLists] = useState<Omit<List, 'createdAt' | 'updatedAt'>[]>([]);
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');

  const [activeList, setActiveList] = useState<number>();
  const [editList, setEditList] = useState<number>();
  const [word, setWord] = useState('');
  const [words, setWords] = useState<Word[]>([]);
  const [query, setQuery] = useState('');

  const collectionIsNew = !collectionId;

  const id = useId();

  const { words: data, status } = useWords(undefined, undefined, query);

  const handleListSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName.trim().length > 0 && !lists.some((list) => list.name === listName)) {
      setLists([...lists, { id: lists.length + 1, name: listName, collectionId: collectionId ?? 0 }]);
      setListName('');
    }
  };

  return (
    <div>
      <Input className='w-full' label='Name der Kollektion' value={name} onChange={setName} />
      <BasicDataEditor name={name} description={description} setName={setName} setDescription={setDescription} />
      <Hr className='my-4' />
      <div>
        <ListAddForm handleListSubmit={handleListSubmit} listName={listName} lists={lists} setListName={setListName} />
        <Lists
          lists={lists}
          activeList={activeList}
          setActiveList={setActiveList}
          editList={editList}
          setEditList={setEditList}
          setLists={setLists}
        />
        {activeList && (
          <div>
            <Hr className='my-4' />
            <h2 className='text-center text-lg'>
              Wörter in <b>{lists.find((l) => l.id === activeList)?.name}</b>
            </h2>
            <div className='grid grid-cols-2'>
              <div className='border-r pr-3'>
                <Input className='w-full' placeholder='Wort suchen...' value={query} onChange={setQuery} />
                <div>
                  {data?.map((word) => (
                    <button
                      key={word.id}
                      className={clsx('flex items-center rounded-lg bg-gray-800 px-3 py-2 dark:border-gray-700')}
                    >
                      {word.name}
                      <Plus
                        onClick={(e) => {
                          e.stopPropagation();
                          setWords([...words, word]);
                        }}
                        className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-green-400 p-0.5 dark:bg-green-700'
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className='pl-3'>
                {words.map((word) => (
                  <button key={word.id} className={clsx('flex items-center rounded-lg px-3 py-2 dark:border-gray-700')}>
                    {word.name}
                    <Minus
                      onClick={(e) => {
                        e.stopPropagation();
                        setWords(words.filter((w) => w.id !== word.id));
                      }}
                      className='ml-2 h-5 w-5 cursor-pointer rounded-full bg-red-400 p-0.5 dark:bg-red-700'
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCollection;
