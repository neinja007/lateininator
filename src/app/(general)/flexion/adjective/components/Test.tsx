import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import TrainerInput from '@/components/TrainerInput';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Adjective } from '@/types/word';
import { Comparison, ComparisonDegree, Gender, WordCase } from '@/types/word_constants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { getForm } from '@/utils/word_utils/getForm';

type TestProps = {
  activeWord: Adjective;
  testingType: 'table' | 'individual';
  stage: 'test' | 'review';
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  maxWords: number;
  remainingWords: number;
  handleContinue: () => void;
  genders: Gender[];
  comparisonDegrees: ComparisonDegree[];
  individualInputValue: string;
  setIndividualInputValue: Dispatch<SetStateAction<string>>;
  checkAdverb: boolean;
};

const Test = ({
  activeWord,
  testingType,
  stage,
  tableInputValues,
  setTableInputValues,
  maxWords,
  remainingWords,
  handleContinue,
  genders,
  comparisonDegrees,
  individualInputValue,
  setIndividualInputValue,
  checkAdverb
}: TestProps) => {
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>();

  const [tableInputForm, setTableInputForm] = useState<TableInputForm>();

  useEffect(() => {
    if (!activeWord || activeWord.type !== 'adjective') return;
    if (testingType === 'individual' || genders.length === 0) {
      setIndividualInputForm({
        adverb: genders.length === 0 || Math.random() < 0.04,
        comparisonDegree: getRandomItem(comparisonDegrees),
        numerus: getRandomItem(['sin', 'plu']),
        wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase,
        gender: getRandomItem(genders)
      });
    } else {
      setTableInputForm({
        comparison: activeWord.comparison as Comparison,
        comparisonDegree: getRandomItem(comparisonDegrees)
      });
    }
  }, [activeWord, comparisonDegrees, genders, testingType]);

  const { submit } = useTestForm(handleContinue);

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {individualInputForm && (testingType === 'individual' || genders.length === 0) ? (
          <TrainerInput
            label={
              !individualInputForm.adverb
                ? `
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${activeWord.comparison !== '-' ? MAPPER.extended.comparison[activeWord.comparison] : '-'}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `
                : `Adverb ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]} ${activeWord.comparison !== '-' ? MAPPER.extended.comparison[activeWord.comparison] : '-'}`
            }
            handleChange={setIndividualInputValue}
            value={individualInputValue}
            correctValue={getForm(activeWord, individualInputForm)}
            stage={stage}
          />
        ) : (
          tableInputForm &&
          testingType === 'table' && (
            <TableInput
              checkAdverb={checkAdverb}
              genders={genders}
              form={tableInputForm}
              values={tableInputValues}
              setValues={setTableInputValues}
              stage={stage}
              activeWord={activeWord}
            />
          )
        )}
        <ActionBar
          form
          handleContinue={handleContinue}
          progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
        />
      </form>
    </>
  );
};

export default Test;
