import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { WordSchema } from '@/schemas/word';
import { generateSelectInputPropertyOptions } from '@/utils/helpers/generateSelectInputPropertyOptions';
import { UseFormRegister } from 'react-hook-form';

export const NounFields = ({ register }: { register: UseFormRegister<WordSchema> }) => {
  return (
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
      <CheckboxWithLabel label='Nur Plural' {...register('noun.pluralOnly')} />
    </>
  );
};
