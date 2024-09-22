import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Adjective } from '@/types/word';
import { Comparison, ComparisonDegree, Gender } from '@/types/wordConstants';
import { getRandomItem } from '@/utils/helpers/getRandomItem';
import { getForm } from '@/utils/word/getForm';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import { IndividualTrainerInput } from '../../components/IndividualTrainerInput';
import { useSettings } from '@/hooks/database/queries/useSettings';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { getRandomIndividualInputForm } from '../utils/getRandomIndividualInputForm';

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
  points: number;
  difference: number;
  addDifference: (difference: number) => void;
  addDifferenceToPoints: () => void;
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
  checkAdverb,
  points,
  difference,
  addDifference,
  addDifferenceToPoints
}: TestProps) => {
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>();
  const [tableInputForm, setTableInputForm] = useState<TableInputForm>();

  const { settings } = useSettings();

  const enabledWordCases =
    settings && settings.TESTING_VOCATIVE === 'true' ? WORD_CONSTANTS.wordCase : WORD_CONSTANTS.wordCaseWithoutVocative;

  useEffect(() => {
    if (!activeWord || !isAdjective(activeWord)) return;
    if (testingType === 'individual' || genders.length === 0) {
      setIndividualInputForm(getRandomIndividualInputForm(genders, comparisonDegrees, [...enabledWordCases]));
    } else {
      setTableInputForm({
        comparison: activeWord.adjective.comparison as Comparison,
        comparisonDegree: getRandomItem(comparisonDegrees)
      });
    }
  }, [activeWord, comparisonDegrees, enabledWordCases, genders, testingType]);

  const { submit } = useTestForm(handleContinue);

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {individualInputForm && (testingType === 'individual' || genders.length === 0) ? (
          <IndividualTrainerInput
            addDifference={addDifference}
            label={
              !individualInputForm.adverb
                ? `
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${MAPPER.extended.comparison[activeWord.adjective.comparison]}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `
                : `Adverb ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]} ${MAPPER.extended.comparison[activeWord.adjective.comparison]}`
            }
            value={individualInputValue}
            correctValue={getForm(activeWord, individualInputForm).form}
            stage={stage}
            setValue={setIndividualInputValue}
          />
        ) : (
          tableInputForm &&
          testingType === 'table' && (
            <TableInput
              addDifference={addDifference}
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
          addDifferenceToPoints={addDifferenceToPoints}
          form
          handleContinue={handleContinue}
          points={points}
          progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
          difference={difference}
        />
      </form>
    </>
  );
};

export default Test;
