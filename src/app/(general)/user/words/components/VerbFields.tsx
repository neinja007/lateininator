import Input from '@/components/Input';
import Select from '@/components/Select';
import { WordSchema } from '@/schemas/word';
import { generateSelectInputPropertyOptions } from '@/utils/helpers/generateSelectInputPropertyOptions';
import { UseFormRegister } from 'react-hook-form';

export const VerbFields = ({ register }: { register: UseFormRegister<WordSchema> }) => {
  return (
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
  );
};
