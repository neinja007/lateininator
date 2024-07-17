import ActionBar from '@/components/ActionBar';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import { WORD_CONSTANTS } from '@/constants';
import { Comparison, ComparisonDegree, Gender, Numerus, Stage, Word, WordCase } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { getForm } from '@/utils/wordUtils';
import { Dispatch, Fragment, SetStateAction } from 'react';
import table from '@/styles/table.module.css';

type TestProps = {
  activeWord: Word;
  testingType: 'table' | 'individual';
  individualInputForm:
    | {
        comparison: Comparison;
        comparisonDegree: ComparisonDegree;
        gender: Gender;
        numerus: Numerus;
        wordCase: WordCase;
      }
    | undefined;
  individualInputValue: string;
  setIndividualInputValue: (value: string) => void;
  stage: 'test' | 'review';
  tableInputForm:
    | {
        comparison: Comparison;
        comparisonDegree: ComparisonDegree;
      }
    | undefined;
  tableInputValues: Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>;
  setTableInputValues: Dispatch<
    SetStateAction<Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>
  >;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
};

const Test = ({
  activeWord,
  testingType,
  individualInputForm,
  individualInputValue,
  setIndividualInputValue,
  stage,
  tableInputForm,
  tableInputValues,
  setTableInputValues,
  maxWords,
  remainingWords,
  handleContinue
}: TestProps) => {
  return (
    <>
      <WordDisplay word={activeWord} />
      <hr className='border-gray-500' />
      <div>
        {individualInputForm && testingType === 'individual' ? (
          <TrainerInput
            label={`
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `}
            handleChange={setIndividualInputValue}
            value={individualInputValue}
            correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
          />
        ) : (
          tableInputForm &&
          testingType === 'table' && (
            <Fragment>
              <p>{MAPPER.extended.comparisonDegree[tableInputForm.comparisonDegree]}</p>
              <table className={table.table}>
                <thead className={table.thead}>
                  <tr>
                    <th />
                    {WORD_CONSTANTS.gender.map((gender, i) => (
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
                            {WORD_CONSTANTS.gender.map((gender, i) => (
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
            </Fragment>
          )
        )}
      </div>
      <hr className='border-gray-500' />
      <ActionBar handleContinue={handleContinue} progressPercentage={((maxWords - remainingWords) / maxWords) * 100} />
    </>
  );
};

export default Test;
