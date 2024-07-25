import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import table from '@/styles/table.module.css';
import { Noun } from '@/types';
import { SetTableInputValues, TableInputValues } from '../../types';

type TableInputProps = {
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Noun;
};

const TableInput = ({ tableInputValues, setTableInputValues, stage, activeWord }: TableInputProps) => {
  return (
    <>
      <p>{activeWord.declension !== '-' ? MAPPER.extended.declension[activeWord.declension] : '-'}</p>
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
