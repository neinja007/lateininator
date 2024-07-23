import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import table from '@/styles/table.module.css';
import { Comparison, ComparisonDegree, Gender, Numerus, Word, WordCase } from '@/types';
import { Dispatch, SetStateAction } from 'react';

type TableInputProps = {
  tableInputForm: {
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
  };
  genders: Gender[];
  tableInputValues: Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>;
  setTableInputValues: Dispatch<
    SetStateAction<Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>
  >;
  stage: 'test' | 'review';
  activeWord: Word;
};

const TableInput = ({
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  stage,
  activeWord,
  genders
}: TableInputProps) => {
  return (
    <>
      <p>{MAPPER.extended.comparisonDegree[tableInputForm.comparisonDegree]}</p>
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
                  <tr key={i} className='border-t'>
                    <th className={table.th}>
                      {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {genders.map((gender, i) => (
                      <td key={i} className='border p-0'>
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
      <br />
    </>
  );
};

export default TableInput;
