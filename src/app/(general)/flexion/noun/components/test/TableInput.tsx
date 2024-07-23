import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import table from '@/styles/table.module.css';
import { Numerus, Word, WordCase } from '@/types';
import { Dispatch, SetStateAction } from 'react';

type TableInputProps = {
  tableInputValues: Record<Numerus, Record<Exclude<WordCase, '6'>, string>>;
  setTableInputValues: Dispatch<SetStateAction<Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>;
  stage: 'test' | 'review';
  activeWord: Word;
};

const TableInput = ({ tableInputValues, setTableInputValues, stage, activeWord }: TableInputProps) => {
  return (
    <>
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
                    <td key={i} className='border p-0'>
                      <TrainerInput
                        customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                        value={tableInputValues[numerus][wordCase]}
                        correctValue={
                          stage === 'review'
                            ? getForm(activeWord, {
                                numerus,
                                wordCase
                              })
                            : undefined
                        }
                        handleChange={(value) =>
                          setTableInputValues((prev) => ({
                            ...prev,
                            [numerus]: {
                              ...prev[numerus],
                              [wordCase]: value
                            }
                          }))
                        }
                      />
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
      <br />
    </>
  );
};

export default TableInput;
