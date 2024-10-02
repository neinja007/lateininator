import Input from '@/components/Input';
import Select from '@/components/Select';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { WordSchema } from '@/schemas/word';
import { WordType } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import { UseFormRegister } from 'react-hook-form';

export const BasicDataFields = ({ register }: { register: UseFormRegister<WordSchema> }) => {
  return (
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
  );
};
