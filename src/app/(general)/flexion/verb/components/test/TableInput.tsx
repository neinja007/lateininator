import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';
import { Verb } from '@/types/word';
import { Tense } from '@/types/wordConstants';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';

type TableInputProps = {
  tableInputForm: TableInputForm;
  tenses: Tense[];
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Verb;
  checkImperative: boolean;
  addDifference: (difference: number) => void;
};

const TableInput = ({
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  stage,
  activeWord,
  tenses,
  checkImperative,
  addDifference
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
            {tenses.map((tense, i) => (
              <th key={i} className={table.th}>
                {MAPPER.extended.tense[tense]}
              </th>
            ))}
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
                    {tenses.map((tense) =>
                      ((tableInputForm.modus === 'ind' || tense !== 'fut1') && person !== '4') || tense === 'pres' ? (
                        <TableTrainerInput
                          addDifference={addDifference}
                          key={tense}
                          value={tableInputValues[tense][numerus][person]}
                          correctValue={
                            getForm(activeWord, {
                              tense,
                              numerus,
                              person,
                              modus: tableInputForm.modus,
                              voice: tableInputForm.voice
                            }).form
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
                          stage={stage}
                        />
                      ) : (
                        <td className='border p-0 dark:border-gray-500' key={tense}>
                          <div className='h-8 w-full bg-red-400 pl-2 dark:bg-red-800'>-</div>
                        </td>
                      )
                    )}
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
