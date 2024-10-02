'use client';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { wordSchema } from '@/schemas/word';
import { WordType } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import { generateSelectInputPropertyOptions } from '@/utils/helpers/generateSelectInputPropertyOptions';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';

export const WordAddForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm({ resolver: zodResolver(wordSchema) });

  const type = watch('type');

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4 grid grid-cols-4 gap-4'>
        <Input placeholder='z.B. amicus' label='Wort' className='w-full' {...register('name')} />
        <Select
          label='Wortart'
          className='w-full'
          options={APP_CONSTANTS.wordTypes.reduce(
            (acc: Record<WordType, string>, curr) => {
              acc[curr] = MAPPER.extended.type.singular[curr];
              return acc;
            },
            {} as Record<WordType, string>
          )}
          {...register('type')}
        />
        <div className='col-span-2'>
          <Input
            label='Übersetzungen (mehrere durch , trennen)'
            className='w-full'
            {...register('translation', {
              setValueAs: (value) =>
                value
                  .split(',')
                  .map((item: string) => item.trim())
                  .filter(Boolean)
            })}
            placeholder='z.B. Freund, der Freund'
          />
        </div>
      </div>
      <div className='mb-4 grid grid-cols-3 gap-4'>
        {type === 'NOUN' && (
          <>
            <Select
              className='w-full'
              label='Deklination'
              options={generateSelectInputPropertyOptions('declension')}
              {...register('noun.declension')}
            />
            <Input placeholder='z.B. amici' className='w-full' label='Genitiv' {...register('noun.genitive')} />
            <Select
              className='w-full'
              label='Geschlecht'
              options={generateSelectInputPropertyOptions('gender')}
              {...register('noun.gender')}
            />
            <CheckboxWithLabel
              label='Nur Plural'
              checked={watch('noun.pluralOnly')}
              handleChange={(value) => {
                setValue('noun.pluralOnly', value);
              }}
            />
          </>
        )}
        {type === 'VERB' && (
          <>
            <Select
              className='w-full'
              label='Konjugation'
              options={generateSelectInputPropertyOptions('conjugation')}
              {...register('verb.conjugation')}
            />
            <Input placeholder='z.B. amo' className='w-full' label='Präsens' {...register('verb.present')} />
            <Input placeholder='z.B. amavi' className='w-full' label='Perfekt' {...register('verb.perfect')} />
            <Input placeholder='z.B. amatum' className='w-full' label='PPP' {...register('verb.participle')} />
          </>
        )}
        {type === 'ADJECTIVE' && (
          <>
            <Select
              className='w-full'
              label='Komparation'
              options={generateSelectInputPropertyOptions('comparison')}
              {...register('adjective.comparison')}
            />
            <Input placeholder='z.B. mala' className='w-full' label='Feminin' {...register('adjective.femininum')} />
            <Input placeholder='z.B. malum' className='w-full' label='Neutrum' {...register('adjective.neutrum')} />
          </>
        )}
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
