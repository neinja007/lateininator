import { MAPPER } from '@/utils/other/mapper';
import table from '@/styles/table.module.css';
import { SetTableInputValues, TableInputForm, TableInputValues } from '../../types';
import { Word } from '@/types/word';
import { Gender } from '@/types/wordConstants';
import { getForm } from '@/utils/word/getForm';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import TableTrainerInput from '../../../components/TableTrainerInput';

type TableInputProps = {
  form: TableInputForm;
  genders: Gender[];
  values: TableInputValues;
  setValues: SetTableInputValues;
  stage: 'test' | 'review';
  activeWord: Word;
  checkAdverb: boolean;
};

const TableInput = ({ form, setValues, values, stage, activeWord, genders, checkAdverb }: TableInputProps) => {
  return (
    <div>
      <p className='mb-2 text-center font-bold'>
        {MAPPER.extended.comparison[form.comparison]} {MAPPER.extended.comparisonDegree[form.comparisonDegree]}
      </p>
      {checkAdverb && (
        <div className='mb-4'>
          <TableTrainerInput
            label='Adverb'
            value={values.adverb}
            handleChange={(value) => setValues((prev) => ({ ...prev, adverb: value }))}
            correctValue={getForm(activeWord, {
              numerus: 'sin',
              wordCase: '1',
              adverb: true,
              comparisonDegree: form.comparisonDegree
            })}
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
                wordCase !== '6' && (
                  <tr key={i} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {genders.map((gender, i) => (
                      <TableTrainerInput
                        key={gender}
                        value={values[gender][numerus][wordCase]}
                        correctValue={getForm(activeWord, {
                          gender,
                          numerus,
                          wordCase,
                          comparisonDegree: form.comparisonDegree
                        })}
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
