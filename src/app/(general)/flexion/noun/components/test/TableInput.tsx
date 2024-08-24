import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputValues } from '../../types';
import { Noun } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';

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
                    <TableTrainerInput
                      key={numerus}
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
