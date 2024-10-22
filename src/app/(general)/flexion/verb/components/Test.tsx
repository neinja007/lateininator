import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';
import { useEffect, useState } from 'react';
import TableInput from './test/TableInput';
import { IndividualInputForm, SetTableInputValues, TableInputForm, TableInputValues } from '../types';
import { MAPPER } from '@/utils/other/mapper';
import { useTestForm } from '@/hooks/useTestForm';
import Hr from '@/components/Hr';
import { Verb } from '@/types/word';
import { Modus, Voice, Tense } from '@/types/wordConstants';
import { getForm } from '@/utils/word/getForm';
import { IndividualTrainerInput } from '../../components/IndividualTrainerInput';
import { getRandomIndividualInputForm } from '../utils/getRandomIndividualInputForm';
import { getRandomTableInputForm } from '../utils/getRandomTableInputForm';
import { BaseProps, PointProps } from '../../types';

type TestProps = {
  activeWord: Verb;
  tableInputValues: TableInputValues;
  setTableInputValues: SetTableInputValues;
  modi: Modus[];
  voices: Voice[];
  tenses: Tense[];
  checkImperative: boolean;
} & PointProps &
  BaseProps;

const Test = ({
  activeWord,
  testingType,
  stage,
  tableInputValues,
  setTableInputValues,
  maxWords,
  remainingWords,
  handleContinue,
  modi,
  voices,
  tenses,
  individualInputValue,
  setIndividualInputValue,
  checkImperative,
  addDifference,
  addDifferenceToPoints,
  points,
  difference
}: TestProps) => {
  const [individualInputForm, setIndividualInputForm] = useState<IndividualInputForm>();

  const [tableInputForm, setTableInputForm] = useState<TableInputForm>();

  useEffect(() => {
    if (stage === 'test') {
      if (testingType === 'individual') {
        setIndividualInputForm(getRandomIndividualInputForm(checkImperative, modi, tenses, voices));
      } else {
        setTableInputForm(getRandomTableInputForm(voices, modi));
      }
    }
  }, [checkImperative, modi, stage, tenses, testingType, voices]);

  const { submit } = useTestForm(handleContinue);

  return (
    <>
      <WordDisplay word={activeWord} />
      <Hr />
      <form onSubmit={submit} className='space-y-8'>
        {testingType === 'individual'
          ? individualInputForm && (
              <IndividualTrainerInput
                addDifference={addDifference}
                label={`${MAPPER.extended.person[individualInputForm.person]} ${MAPPER.extended.numerus[individualInputForm.numerus]}; ${MAPPER.extended.modus[individualInputForm.modus]} ${MAPPER.extended.tense[individualInputForm.tense]} ${MAPPER.extended.voice[individualInputForm.voice]}`}
                value={individualInputValue}
                correctValue={getForm(activeWord, individualInputForm).form}
                stage={stage}
                setValue={setIndividualInputValue}
              />
            )
          : tableInputForm && (
              <TableInput
                addDifference={addDifference}
                checkImperative={checkImperative}
                tenses={tenses}
                tableInputForm={tableInputForm}
                tableInputValues={tableInputValues}
                setTableInputValues={setTableInputValues}
                stage={stage}
                activeWord={activeWord}
              />
            )}
        <ActionBar
          form
          handleContinue={handleContinue}
          progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
          points={points}
          difference={difference}
          addDifferenceToPoints={addDifferenceToPoints}
        />
      </form>
    </>
  );
};

export default Test;
