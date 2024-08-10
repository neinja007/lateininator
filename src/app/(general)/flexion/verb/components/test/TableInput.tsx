import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/formUtils';
import table from '@/styles/table.module.css';
import { Tense, Word } from '@/types';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';

type TableInputProps = {
  tableInputForm: TableInputForm;
  tenses: Tense[];
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Word;
  checkImperative: boolean;
};

const TableInput = ({
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  stage,
  activeWord,
  tenses,
  checkImperative
}: TableInputProps) => {
  return (
    <div>
      <p className='mb-2 text-center font-bold'>
        {MAPPER.extended.modus[tableInputForm.modus]} {MAPPER.extended.voice[tableInputForm.voice]}
      </p>
      <table className={table.table}>
        <thead className={table.thead}>
          <tr>
            <th />
            {tenses.map(
              (tense, i) =>
                (tableInputForm.modus === 'ind' || tense !== 'fut1') && (
                  <th key={i} className={table.th}>
                    {MAPPER.extended.tense[tense]}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {WORD_CONSTANTS.numerus.map((numerus) =>
            WORD_CONSTANTS.person.map(
              (person) =>
                (person !== '4' ||
                  (tableInputForm.modus === 'ind' && tableInputForm.voice === 'act' && checkImperative)) && (
                  <tr key={person} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.short.person[person]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {tenses.map((tense) => {
                      return (
                        (tableInputForm.modus === 'ind' || tense !== 'fut1') && (
                          <td key={tense} className='border p-0 dark:border-gray-500'>
                            {person !== '4' || tense === 'pres' ? (
                              <TrainerInput
                                customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                                value={tableInputValues[tense][numerus][person]}
                                correctValue={
                                  stage === 'review'
                                    ? getForm(activeWord, {
                                        tense,
                                        numerus,
                                        person,
                                        modus: tableInputForm.modus,
                                        voice: tableInputForm.voice
                                      })
                                    : undefined
                                }
                                handleChange={(value) =>
                                  setTableInputValues((prev) => ({
                                    ...prev,
                                    [tense]: {
                                      ...prev[tense],
                                      [numerus]: {
                                        ...prev[tense][numerus],
                                        [person]: value
                                      }
                                    }
                                  }))
                                }
                              />
                            ) : (
                              <div className='h-8 w-full bg-red-400 dark:bg-red-800'>-</div>
                            )}
                          </td>
                        )
                      );
                    })}
                  </tr>
                )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableInput;
