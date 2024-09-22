import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputValues } from '../../types';
import { Noun } from '@/types/word';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';
import { useSettings } from '@/hooks/database/queries/useSettings';
import InsertBasesButton from '../../../components/InsertBasesButton';
import { getBase } from '@/utils/word/getBase';
import { getAllTableInputValues } from '../../utils/getAllTableInputValues';

type TableInputProps = {
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Noun;
  addDifference: (arg: number) => void;
};

const TableInput = ({ tableInputValues, setTableInputValues, stage, activeWord, addDifference }: TableInputProps) => {
  const { settings } = useSettings();
  const showVocative = settings && settings.TESTING_VOCATIVE === 'true';

  return (
    <div>
      <div className='mb-2 flex items-baseline justify-between'>
        <p className='font-bold'>{MAPPER.extended.declension[activeWord.noun.declension]}</p>
        <InsertBasesButton onClick={() => setTableInputValues(getAllTableInputValues(getBase(activeWord, {})))} />
      </div>
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
              (wordCase !== '6' || showVocative) && (
                <tr key={wordCase} className={table.tr}>
                  <th className={table.th}>{MAPPER.extended.wordCase[wordCase]}</th>
                  {WORD_CONSTANTS.numerus.map((numerus, i) => (
                    <TableTrainerInput
                      addDifference={addDifference}
                      key={numerus}
                      value={tableInputValues[numerus][wordCase]}
                      correctValue={
                        getForm(activeWord, {
                          numerus,
                          wordCase
                        }).form
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
