import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputValues } from '../../types';
import { Noun } from '@/types/word';
import { getForm } from '@/utils/word_utils/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

type TableInputProps = {
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Noun;
};

const TableInput = ({ tableInputValues, setTableInputValues, stage, activeWord }: TableInputProps) => {
  return (
    <div>
      <p className='mb-2 text-center font-bold'>
        {activeWord.declension !== '-' ? MAPPER.extended.declension[activeWord.declension] : '-'}
      </p>
      <table className={table.table}>
        <thead className={table.thead}>
          <tr>
            <th />
            {WORD_CONSTANTS.numerus.map((numerus) => (
              <th key={numerus} className={table.th}>
                {MAPPER.extended.numerus[numerus]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {WORD_CONSTANTS.wordCase.map(
            (wordCase) =>
              wordCase !== '6' && (
                <tr key={wordCase} className={table.tr}>
                  <th className={table.th}>{MAPPER.extended.wordCase[wordCase]}</th>
                  {WORD_CONSTANTS.numerus.map((numerus, i) => (
                    <td key={i} className='border p-0 dark:border-gray-500'>
                      <TrainerInput
                        customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                        value={tableInputValues[numerus][wordCase]}
                        correctValue={getForm(activeWord, {
                          numerus,
                          wordCase
                        })}
                        handleChange={(value) =>
                          setTableInputValues((prev) => ({
                            ...prev,
                            [numerus]: {
                              ...prev[numerus],
                              [wordCase]: value
                            }
                          }))
                        }
                        stage={stage}
                      />
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableInput;
