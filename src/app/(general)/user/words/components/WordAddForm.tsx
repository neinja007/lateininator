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
import { APP_CONSTANTS } from '@/constants/appConstants';
import { MainWordType, WordType } from '@/types/appConstants';
import ExceptionEditor from './ExceptionEditor';
import { transformTypeToMainType } from '@/utils/word/transformTypeToMainType';

export const WordAddForm = () => {
  const [word, setWord] = useState<Word>();
  const [lastWordId, setLastWordId] = useState<number>();
  const { register, unregister, handleSubmit, watch, setValue, reset } = useForm<WordSchema>({
    resolver: zodResolver(wordSchema)
  });

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
            if (key === 'exception') {
              setValue('exception', JSON.stringify(value));
              return;
            }
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

  const type: WordType | undefined = watch('type') as WordType | undefined;

  useEffect(() => {
    if (!type) return;
    unregister(
      APP_CONSTANTS.mainWordTypes
        .filter((mainType) => type !== mainType)
        .map((type) => type.toLowerCase()) as Lowercase<MainWordType>[]
    );
  }, [type, unregister, word]);

  const { mutateAsync: addWord, status } = useAddWord(word?.id);

  const onSubmit = async (data: any) => {
    await addWord(data).then((data) => setLastWordId(data.data.id));
    setWord(undefined);
    reset();
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
      {type && word && transformTypeToMainType(type) !== 'OTHER' && (
        <ExceptionEditor
          exception={word.exception}
          setExceptions={(exceptions) => setValue('exception', JSON.stringify(exceptions))}
          type={transformTypeToMainType(type) as MainWordType}
        />
      )}
      <div className='my-2 text-center'>
        {status === 'pending' && <span className='animate-pulse'>Wort wird gespeichert...</span>}
        {status === 'success' && (
          <span className='text-green-500'>
            Wort wurde erfolgreich gespeichert.{' '}
            <Link href={`/vocabulary/dictionary/${lastWordId}`}>Im Wörterbuch ansehen</Link>
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
