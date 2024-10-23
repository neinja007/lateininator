'use client';
import { WordSchema, wordSchema } from '@/schemas/word';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import { useAddWord } from '@/hooks/database/mutations/useAddWord';
import { BasicDataFields } from './BasicDataFields';
import { AdjectiveFields } from './AdjectiveFields';
import { VerbFields } from './VerbFields';
import { NounFields } from './NounFields';
import WordSelector from './WordSelector';
import { useEffect, useState } from 'react';
import { Word } from '@/types/word';
import Link from '@/components/Link';

export const WordAddForm = () => {
  const [word, setWord] = useState<Word>();
  const { register, handleSubmit, watch, setValue, reset } = useForm<WordSchema>({ resolver: zodResolver(wordSchema) });

  // update inputs if the targeted word is changed
  useEffect(() => {
    if (word) {
      // iterate through word keys
      Object.keys(word).forEach((key) => {
        // if key is in word schema
        if (key in wordSchema.shape) {
          let value: Object | string[] | string = word[key as keyof Word] as Object | string[] | string;

          if (value instanceof Array) {
            // join translation array
            value = value.join(', ');
          } else if (value instanceof Object) {
            // also set type specific inputs
            Object.entries(value).forEach(([k, v]) => {
              const fullKey = word.type.toLowerCase() + '.' + k;
              setValue(fullKey as keyof WordSchema, v);
            });
            return;
          }
          setValue(key as keyof WordSchema, value?.toString());
        }
      });
    } else {
      reset();
    }
  }, [word, setValue, reset]);

  const { mutate: addWord, status } = useAddWord(word?.id);

  const type = watch('type');

  const onSubmit = (data: any) => {
    addWord(data);
    setWord(undefined);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WordSelector setWord={setWord} word={word} />
      <BasicDataFields register={register} />
      <div className='mb-2 grid grid-cols-3 gap-4'>
        {type === 'NOUN' && <NounFields register={register} />}
        {type === 'VERB' && <VerbFields register={register} />}
        {type === 'ADJECTIVE' && <AdjectiveFields register={register} />}
      </div>
      <Textarea placeholder='z.B. nur mit Perfekt' label='Info' className='w-full' {...register('info')} />
      <div className='my-2 text-center'>
        {status === 'pending' && <span className='animate-pulse'>Wort wird gespeichert...</span>}
        {status === 'success' && (
          <span className='text-green-500'>
            Wort wurde erfolgreich gespeichert.{' '}
            <Link href={`/vocabulary/dictionary/${word?.id}`}>Im Wörterbuch ansehen</Link>
          </span>
        )}
        {status === 'error' && <span className='text-red-500'>Wort konnte nicht gespeichert werden.</span>}
      </div>
      <div className='mt-4 flex justify-center'>
        <Button color='primary' type='submit'>
          Wort {word ? 'speichern' : 'hinzufügen'}
        </Button>
      </div>
    </form>
  );
};
