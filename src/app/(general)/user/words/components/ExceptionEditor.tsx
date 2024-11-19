import { exceptionStructure } from '@/constants/other';
import { MainWordType, WordProperty } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
import clsx from 'clsx';
import { Plus, Settings2 } from 'lucide-react';
import table from '@/styles/table.module.css';
import { getValueArrayFromObject } from '../utils/getValueArrayFromObject';
import { useEffect, useState } from 'react';
import { getObjectFromValueArray } from '../utils/getObjectFromValueArray';
import ExceptionRow from './ExceptionRow';

type ExceptionEditorProps = {
  type: MainWordType;
  exception: Record<string, any>;
  setExceptions: (value: Record<string, any>) => void;
};

const ExceptionEditor = ({ type, exception, setExceptions }: ExceptionEditorProps) => {
  const exceptionsArray = getValueArrayFromObject(exception);
  const [newException, setNewException] = useState(Array(exceptionStructure[type].length + 1).fill(''));

  useEffect(() => {
    setNewException(Array(exceptionStructure[type].length + 1).fill(''));
  }, [type]);

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
              <ExceptionRow
                key={index}
                onClick={() => setExceptions(getObjectFromValueArray(exceptionsArray.filter((_, i) => i !== index)))}
                exceptionValueArray={exceptionValues}
                mode='display'
                type={type}
              />
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
            <ExceptionRow mode='add' exceptionValueArray={newException} onClick={onExceptionAdd} type={type} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExceptionEditor;
