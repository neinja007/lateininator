import Input from '@/components/Input';
import Select from '@/components/Select';
import { WordSchema } from '@/schemas/word';
import { generateSelectInputPropertyOptions } from '@/utils/helpers/generateSelectInputPropertyOptions';
import { UseFormRegister } from 'react-hook-form';

export const AdjectiveFields = ({ register }: { register: UseFormRegister<WordSchema> }) => {
  return (
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
  );
};
