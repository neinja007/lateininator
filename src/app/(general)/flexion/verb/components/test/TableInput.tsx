import TrainerInput from '@/components/TrainerInput';
import { WORD_CONSTANTS } from '@/constants';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import table from '@/styles/table.module.css';
import { Modus, Numerus, Person, Tense, Voice, Word } from '@/types';
import { Dispatch, SetStateAction } from 'react';

type TableInputProps = {
  tableInputForm: {
    voice: Voice;
    modus: Modus;
  };
  tenses: Tense[];
  tableInputValues: Record<Tense, Record<Numerus, Record<Exclude<Person, '4'>, string>>>;
  setTableInputValues: Dispatch<SetStateAction<Record<Tense, Record<Numerus, Record<Exclude<Person, '4'>, string>>>>>;
  stage: 'test' | 'review';
  activeWord: Word;
};

const TableInput = ({
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  stage,
  activeWord,
  tenses
}: TableInputProps) => {
  return (
    <>
      <p>
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
                person !== '4' && (
                  <tr key={person} className={table.tr}>
                    <th className={table.th}>
                      {MAPPER.short.person[person]} {MAPPER.extended.numerus[numerus]}
                    </th>
                    {tenses.map(
                      (tense) =>
                        (tableInputForm.modus === 'ind' || tense !== 'fut1') && (
                          <td key={tense} className='border p-0'>
                            <TrainerInput
                              customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                              value={tableInputValues[tense][numerus][person]}
                              correctValue={
                                stage === 'review'
                                  ? getForm(activeWord, {
                                      tense,
                                      numerus,
                                      person,
                                      modus: tableInputForm.modus,
                                      voice: tableInputForm.voice
                                    })
                                  : undefined
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
                            />
                          </td>
                        )
                    )}
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
