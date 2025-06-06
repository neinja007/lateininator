'use client';
import { useState } from 'react';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';
import { isNoun } from '@/utils/typeguards/isNoun';
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

  const [tableInputValues, setTableInputValues] = useState<TableInputValues>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const { points, difference, addDifference, addDifferenceToPoints } = usePointCounter(stage);

  return (
    <AuthConditionalLock>
      <div className='space-y-5'>
        <Heading heading='Endungstrainer: Nomen'>
          Hier können Sie die Deklination von Nomen üben. Ob Sie sich auf bestimmte Endungen beschränken oder alle
          Deklinationen üben, ist Ihnen überlassen.
        </Heading>
        {stage === 'settings' && (
          <Settings
            currentSettingsStage={currentSettingsStage}
            testingType={testingType}
            setTestingType={setTestingType}
            handleContinue={handleContinue}
            updateWords={updateWords}
            remainingWords={remainingWords}
          />
        )}
        {(stage === 'test' || stage === 'review') && activeWord && isNoun(activeWord) && (
          <Test
            points={points}
            difference={difference}
            addDifference={addDifference}
            addDifferenceToPoints={addDifferenceToPoints}
            stage={stage}
            activeWord={activeWord}
            testingType={testingType}
            individualInputValue={individualInputValue}
            setIndividualInputValue={setIndividualInputValue}
            tableInputValues={tableInputValues}
            setTableInputValues={setTableInputValues}
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
