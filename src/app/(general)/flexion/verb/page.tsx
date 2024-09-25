'use client';
import { useState } from 'react';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';
import { Voice, Modus, Tense } from '@/types/wordConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { isVerb } from '@/utils/typeguards/isVerb';
import { AuthConditionalLock } from '@/components/AuthConditionalLock';
import { usePointCounter } from '@/hooks/usePointCounter';
import { getAllTableInputValues } from './utils/getAllTableInputValues';

const initialTableInputValues = getAllTableInputValues();

const Page = () => {
  const [testingType, setTestingType] = useState<'table' | 'individual'>('table');
  const { activeWord, maxWords, remainingWords, updateWords, stage, handleContinue, currentSettingsStage } = useGame(
    true,
    testingType === 'individual'
      ? () => setIndividualInputValue('')
      : () => setTableInputValues(initialTableInputValues),
    3
  );
  const [voices, setVoices] = useState<Voice[]>([...WORD_CONSTANTS.voice]);
  const [modi, setModi] = useState<Modus[]>([...WORD_CONSTANTS.modus]);
  const [tenses, setTenses] = useState<Tense[]>([...WORD_CONSTANTS.tense]);
  const [checkImperative, setCheckImperative] = useState<boolean>(true);

  const [tableInputValues, setTableInputValues] = useState<TableInputValues>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const { points, difference, addDifference, addDifferenceToPoints } = usePointCounter(stage);

  return (
    <AuthConditionalLock>
      <div className='space-y-5'>
        <Heading heading='Endungstrainer: Verben'>
          Hier können Sie die Konjugation von Verben üben. Sie können sich entweder auf bestimmte Modi, Stimmen oder
          Tempusformen beschränken, oder einfach alles üben.
        </Heading>
        {stage === 'settings' && (
          <Settings
            currentSettingsStage={currentSettingsStage}
            checkImperative={checkImperative}
            setCheckImperative={setCheckImperative}
            testingType={testingType}
            setTestingType={setTestingType}
            voices={voices}
            setVoices={setVoices}
            modi={modi}
            setModi={setModi}
            tenses={tenses}
            setTenses={setTenses}
            handleContinue={handleContinue}
            updateWords={updateWords}
            remainingWords={remainingWords}
          />
        )}
        {(stage === 'test' || stage === 'review') &&
          activeWord &&
          isVerb(activeWord) &&
          activeWord.verb.conjugation !== 'NONE' && (
            <Test
              points={points}
              difference={difference}
              addDifference={addDifference}
              addDifferenceToPoints={addDifferenceToPoints}
              checkImperative={checkImperative}
              activeWord={activeWord}
              stage={stage}
              testingType={testingType}
              modi={modi}
              voices={voices}
              tenses={tenses}
              tableInputValues={tableInputValues}
              setTableInputValues={setTableInputValues}
              individualInputValue={individualInputValue}
              setIndividualInputValue={setIndividualInputValue}
              maxWords={maxWords}
              remainingWords={remainingWords}
              handleContinue={handleContinue}
            />
          )}
        {stage === 'results' && <Results handleContinue={handleContinue} points={points} />}
      </div>
    </AuthConditionalLock>
  );
};

export default Page;
