import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';
import { Word } from '@/types/word';
import { Gender } from '@/types/wordConstants';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';
import { useSettings } from '@/hooks/database/queries/useSettings';
import { getAllTableInputValues } from '../../utils/getAllTableInputValues';
import { getBase } from '@/utils/word/getBase';
import { TableInputHeading } from '../../../components/TableInputHeading';

type TableInputProps = {
  form: TableInputForm;
  genders: Gender[];
  values: TableInputValues;
  setValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Word;
  checkAdverb: boolean;
  addDifference: (difference: number) => void;
};

const TableInput = ({
  form,
  setValues,
  values,
  stage,
  activeWord,
  genders,
  checkAdverb,
  addDifference
}: TableInputProps) => {
  const { settings } = useSettings();

  const showVocative = settings && settings.TESTING_VOCATIVE === 'true';

  return (
    <div>
      <TableInputHeading
        stage={stage}
        onInsertBases={() =>
          setValues(getAllTableInputValues(getBase(activeWord, { comparisonDegree: form.comparisonDegree })))
        }
        text={`${MAPPER.extended.comparison[form.comparison]} ${MAPPER.extended.comparisonDegree[form.comparisonDegree]}`}
      />
      {checkAdverb && (
        <div className='mb-4'>
          <TableTrainerInput
            addDifference={addDifference}
            label='Adverb'
            value={values.adverb}
            handleChange={(value) => setValues((prev) => ({ ...prev, adverb: value }))}
            correctValue={
              getForm(activeWord, {
                numerus: 'sin',
                wordCase: '1',
                adverb: true,
                comparisonDegree: form.comparisonDegree
              }).form
            }
            stage={stage}
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
                (wordCase !== '6' || showVocative) && (
                  <tr key={i} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {genders.map((gender, i) => (
                      <TableTrainerInput
                        addDifference={addDifference}
                        key={gender}
                        value={values[gender][numerus][wordCase]}
                        correctValue={
                          getForm(activeWord, {
                            gender,
                            numerus,
                            wordCase,
                            comparisonDegree: form.comparisonDegree
                          }).form
                        }
                        handleChange={(value) =>
                          setValues((prev) => ({
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
                        stage={stage}
                      />
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
