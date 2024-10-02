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

export const WordAddForm = () => {
  const { register, handleSubmit, watch } = useForm<WordSchema>({ resolver: zodResolver(wordSchema) });

  const { mutate: addWord } = useAddWord();

  const type = watch('type');

  const onSubmit = (data: any) => {
    addWord(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BasicDataFields register={register} />
      <div className='mb-4 grid grid-cols-3 gap-4'>
        {type === 'NOUN' && <NounFields register={register} />}
        {type === 'VERB' && <VerbFields register={register} />}
        {type === 'ADJECTIVE' && <AdjectiveFields register={register} />}
      </div>
      <Textarea placeholder='z.B. nur mit Perfekt' label='Info' className='w-full' {...register('info')} />
      <div className='mt-4 flex justify-center'>
        <Button color='primary' type='submit'>
          Wort hinzufügen
        </Button>
      </div>
    </form>
  );
};
