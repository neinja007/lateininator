import { exceptionStructure } from '@/constants/other';
import { MainWordType } from '@/types/appConstants';
import clsx from 'clsx';
import { Plus } from 'lucide-react';
import table from '@/styles/table.module.css';
import { getValueArrayFromObject } from '../utils/getValueArrayFromObject';
import { useEffect, useState } from 'react';
import { getObjectFromValueArray } from '../utils/getObjectFromValueArray';
import ExceptionRow from './ExceptionRow';
import ExceptionHeader from './ExceptionHeader';

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
          <ExceptionHeader type={type} />
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
