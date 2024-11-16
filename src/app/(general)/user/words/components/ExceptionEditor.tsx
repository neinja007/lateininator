import Select from '@/components/Select';
import { exceptionStructure } from '@/constants/other';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { MainWordType, WordProperty, WordType } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import { Check, Plus, X } from 'lucide-react';
import Input from '@/components/Input';
import table from '@/styles/table.module.css';
import { getValueArrayFromObject } from '../utils/getValueArrayFromObject';
import { useState } from 'react';

type ExceptionEditorProps = {
  type: WordType | undefined;
  exception?: Object;
  setExceptions?: (value: any) => void;
};

const ExceptionEditor = ({ type, exception }: ExceptionEditorProps) => {
  const [exceptions, setExceptions] = useState(getValueArrayFromObject(exception ?? {}));

  return (
    type !== 'OTHER' && (
      <div className='mt-2'>
        Ausnahmen:
        <div className={table.container}>
          <table className={table.table}>
            <thead className={table.thead}>
              <tr>
                {exceptionStructure[type as MainWordType].map((property) => (
                  <th key={property} className={table.th}>
                    {MAPPER.extended.property.singular[property as WordProperty]}
                  </th>
                ))}
                <th className={table.th}>Ausnahme</th>
                <th className={clsx(table.th, 'w-12')}>
                  <X />
                </th>
              </tr>
            </thead>
            <tbody>
              {exceptions.map((exceptionValues, index) => (
                <tr className={table.tr} key={index}>
                  {exceptionValues.map((value, index) => (
                    <td className='border p-0 dark:border-gray-500' key={index}>
                      {index == exceptionStructure[type as MainWordType].length ? (
                        <Input type='text' className={clsx(table.input, 'w-full')} value={value} />
                      ) : (
                        <Select
                          className={clsx(table.select, 'm-0 h-8 w-full !border-none px-1 focus:outline-none')}
                          value={value}
                          options={
                            WORD_CONSTANTS[
                              exceptionStructure[type as MainWordType][index] as keyof typeof WORD_CONSTANTS
                            ] as string[]
                          }
                        />
                      )}
                    </td>
                  ))}
                  <td className={table.td}>
                    <div className='flex items-center'>
                      <button className='rounded-lg border border-red-700 transition-colors hover:bg-red-500'>
                        <X />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className={table.tr}>
                <td
                  colSpan={exceptionStructure[type as MainWordType].length + 1}
                  className={clsx(table.td, 'text-center')}
                >
                  <div className='flex justify-center gap-x-2'>
                    <Plus /> Neue Ausnahme hinzufügen
                  </div>
                </td>
              </tr>
              <tr className={table.tr}>
                {[...Array(exceptionStructure[type as MainWordType].length + 1)].map((value, index) => (
                  <td className='border p-0 dark:border-gray-500' key={index}>
                    {index == exceptionStructure[type as MainWordType].length ? (
                      <Input type='text' className={clsx(table.input, 'w-full')} value={value} />
                    ) : (
                      <Select
                        className={clsx(table.select, 'm-0 h-8 w-full !border-none px-1 focus:outline-none')}
                        value={value}
                        options={
                          WORD_CONSTANTS[
                            exceptionStructure[type as MainWordType][index] as keyof typeof WORD_CONSTANTS
                          ] as string[]
                        }
                      />
                    )}
                  </td>
                ))}
                <td className={table.td}>
                  <div className='flex items-center'>
                    <button className='rounded-lg border border-green-700 transition-colors hover:bg-green-500'>
                      <Check />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default ExceptionEditor;
