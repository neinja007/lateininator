import Select from '@/components/Select';
import { COLORS, exceptionStructure } from '@/constants/other';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { MainWordType, WordProperty } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import { Check, Plus, Settings2, X } from 'lucide-react';
import Input from '@/components/Input';
import table from '@/styles/table.module.css';
import { getValueArrayFromObject } from '../utils/getValueArrayFromObject';
import { useState } from 'react';
import { getObjectFromValueArray } from '../utils/getObjectFromValueArray';

type ExceptionEditorProps = {
  type: MainWordType;
  exception: Object;
  setExceptions: (value: Object) => void;
};

const ExceptionEditor = ({ type, exception, setExceptions }: ExceptionEditorProps) => {
  const exceptionsArray = getValueArrayFromObject(exception);
  const [newException, setNewException] = useState(Array(exceptionStructure[type].length + 1).fill(''));

  const onExceptionAdd = () => {
    setExceptions(getObjectFromValueArray([...exceptionsArray, newException]));
    setNewException(Array(exceptionStructure[type].length + 1).fill(''));
  };

  return (
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
                <Settings2 />
              </th>
            </tr>
          </thead>
          <tbody>
            {exceptionsArray.map((exceptionValues, index) => (
              <tr className={table.tr} key={index}>
                {exceptionValues.map((value, index) => (
                  <td className='border p-0 dark:border-gray-500' key={index}>
                    {index == exceptionStructure[type as MainWordType].length ? (
                      <Input
                        disabled
                        unstyled
                        type='text'
                        className={clsx(table.input, 'h-10 w-full bg-transparent px-3')}
                        value={value}
                      />
                    ) : (
                      <Select
                        disabled
                        className={clsx(
                          table.select,
                          'm-0 h-10 w-full !border-none bg-transparent px-3 focus:outline-none'
                        )}
                        unstyled
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
                <td className='p-0'>
                  <button
                    type='button'
                    onClick={() =>
                      setExceptions(getObjectFromValueArray(exceptionsArray.filter((_, i) => i !== index)))
                    }
                    className={clsx('flex h-10 w-full items-center justify-center', COLORS.red.dynamic)}
                  >
                    <X />
                  </button>
                </td>
              </tr>
            ))}
            <tr className={table.tr}>
              <td
                colSpan={exceptionStructure[type as MainWordType].length + 1}
                className={clsx(table.td, 'text-center')}
              >
                <div className='flex items-center justify-center gap-x-2'>
                  <Plus /> Neue Ausnahme hinzufügen
                </div>
              </td>
            </tr>
            <tr className={table.tr}>
              {[...Array(exceptionStructure[type as MainWordType].length + 1)].map((_, index) => (
                <td className='border p-0 dark:border-gray-500' key={index}>
                  {index == exceptionStructure[type as MainWordType].length ? (
                    <Input
                      type='text'
                      unstyled
                      onChange={(e) => setNewException((prev) => prev.map((v, i) => (i == index ? e.target.value : v)))}
                      value={newException[index]}
                      className={clsx(table.input, 'h-10 w-full bg-gray-900 px-3')}
                    />
                  ) : (
                    <Select
                      unstyled
                      value={newException[index]}
                      onChange={(e) => setNewException((prev) => prev.map((v, i) => (i == index ? e.target.value : v)))}
                      className={clsx(table.select, 'm-0 h-10 w-full !border-none bg-gray-900 px-3 focus:outline-none')}
                      options={
                        WORD_CONSTANTS[
                          exceptionStructure[type as MainWordType][index] as keyof typeof WORD_CONSTANTS
                        ] as string[]
                      }
                    />
                  )}
                </td>
              ))}
              <td className='p-0'>
                <button
                  onClick={onExceptionAdd}
                  type='button'
                  className={clsx('flex h-10 w-full items-center justify-center', COLORS.green.dynamic)}
                >
                  <Check />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExceptionEditor;
