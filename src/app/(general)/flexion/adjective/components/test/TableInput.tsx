import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/formUtils';
import table from '@/styles/table.module.css';
import { Gender, Word } from '@/types';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';

type TableInputProps = {
  tableInputForm: TableInputForm;
  genders: Gender[];
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Word;
  checkAdverb: boolean;
};

const TableInput = ({
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  stage,
  activeWord,
  genders,
  checkAdverb
}: TableInputProps) => {
  return (
    <div>
      <p className='mb-2 text-center font-bold'>
        {MAPPER.extended.comparison[tableInputForm.comparison]}{' '}
        {MAPPER.extended.comparisonDegree[tableInputForm.comparisonDegree]}
      </p>
      {checkAdverb && (
        <div className='mb-4'>
          <TrainerInput
            label='Adverb'
            value={tableInputValues.adverb}
            handleChange={(value) => setTableInputValues((prev) => ({ ...prev, adverb: value }))}
            correctValue={
              stage === 'review'
                ? getForm(activeWord, {
                    numerus: 'sin',
                    wordCase: '1',
                    adverb: true,
                    comparisonDegree: tableInputForm.comparisonDegree
                  })
                : undefined
            }
          />
        </div>
      )}
      <table className={table.table}>
        <thead className={table.thead}>
          <tr>
            <th />
            {genders.map((gender, i) => (
              <th key={i} className={table.th}>
                {MAPPER.extended.gender[gender]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {WORD_CONSTANTS.numerus.map((numerus) =>
            WORD_CONSTANTS.wordCase.map(
              (wordCase, i) =>
                wordCase !== '6' && (
                  <tr key={i} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {genders.map((gender, i) => (
                      <td key={i} className='border border-gray-500 p-0'>
                        <TrainerInput
                          customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                          value={tableInputValues[gender][numerus][wordCase]}
                          correctValue={
                            stage === 'review'
                              ? getForm(activeWord, {
                                  gender,
                                  numerus,
                                  wordCase,
                                  comparisonDegree: tableInputForm.comparisonDegree
                                })
                              : undefined
                          }
                          handleChange={(value) =>
                            setTableInputValues((prev) => ({
                              ...prev,
                              [gender]: {
                                ...prev[gender],
                                [numerus]: {
                                  ...prev[gender][numerus],
                                  [wordCase]: value
                                }
                              }
                            }))
                          }
                        />
                      </td>
                    ))}
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
