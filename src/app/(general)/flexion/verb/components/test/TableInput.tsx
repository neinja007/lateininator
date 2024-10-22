import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';
import { Verb } from '@/types/word';
import { Tense, Voice } from '@/types/wordConstants';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';
import { getAllTableInputValues } from '../../utils/getAllTableInputValues';
import { getBase } from '@/utils/word/getBase';
import { TableInputHeading } from '../../../components/TableInputHeading';

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

const mapTypeToBaseType = (voice: Voice, type: Tense): 'present' | 'perfect' | 'participle' => {
  if (type === 'fut1' || type === 'pres' || type === 'impe') {
    return 'present';
  } else if (voice === 'pas') {
    return 'participle';
  } else {
    return 'perfect';
  }
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
      <TableInputHeading
        stage={stage}
        onInsertBases={() =>
          setTableInputValues(
            getAllTableInputValues((tense) =>
              getBase(activeWord, { baseType: mapTypeToBaseType(tableInputForm.voice, tense) })
            )
          )
        }
        text={`${MAPPER.extended.modus[tableInputForm.modus]} ${MAPPER.extended.voice[tableInputForm.voice]}`}
      />
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
                    {tenses.map(
                      (tense) =>
                        (((tableInputForm.modus === 'ind' || tense !== 'fut1') && person !== '4') ||
                          tense === 'pres') && (
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
