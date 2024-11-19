import Select from '@/components/Select';
import { exceptionStructure, COLORS } from '@/constants/other';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { MainWordType } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import { Check, X } from 'lucide-react';
import table from '@/styles/table.module.css';
import Input from '@/components/Input';

type ExceptionRowProps = {
  exceptionValueArray: string[];
  type: MainWordType;
  mode: 'add' | 'display';
  onClick: () => void;
};

const ExceptionRow = ({ exceptionValueArray, type, onClick, mode }: ExceptionRowProps) => {
  return (
    <tr className={table.tr}>
      {exceptionValueArray.map((value, index) => (
        <td className='border p-0 dark:border-gray-500' key={index}>
          {index == exceptionStructure[type as MainWordType].length ? (
            <Input
              disabled={mode === 'display'}
              unstyled
              type='text'
              className={clsx(table.input, 'h-10 w-full px-3', mode === 'add' ? 'bg-gray-900' : 'bg-transparent')}
              value={value}
            />
          ) : (
            <Select
              disabled={mode === 'display'}
              className={clsx(
                table.select,
                'm-0 h-10 w-full !border-none px-3 focus:outline-none',
                mode === 'add' ? 'bg-gray-900' : 'bg-transparent'
              )}
              unstyled
              value={value}
              options={Object.fromEntries(
                (
                  WORD_CONSTANTS[
                    exceptionStructure[type as MainWordType][index] as keyof typeof WORD_CONSTANTS
                  ] as string[]
                ).map((value) => {
                  const property = exceptionStructure[type as MainWordType][index] as keyof typeof MAPPER.extended;
                  return [value, MAPPER.extended[property][value as keyof (typeof MAPPER.extended)[typeof property]]];
                })
              )}
            />
          )}
        </td>
      ))}
      <td className='p-0'>
        <button
          type='button'
          onClick={onClick}
          className={clsx(
            'flex h-10 w-full items-center justify-center',
            COLORS[mode === 'display' ? 'red' : 'green'].dynamic
          )}
        >
          {mode === 'display' ? <X /> : <Check />}
        </button>
      </td>
    </tr>
  );
};

export default ExceptionRow;
