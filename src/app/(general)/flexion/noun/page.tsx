'use client';

import { useState } from 'react';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { isNoun } from '@/utils/typeguards/isNoun';
import { AuthConditionalLock } from '@/components/AuthConditionalLock';

const initialTableInputValues: TableInputValues = WORD_CONSTANTS.numerus.reduce(
  (acc, curr) => ({ ...acc, [curr]: WORD_CONSTANTS.wordCase.reduce((acc, curr) => ({ ...acc, [curr]: '' }), {}) }),
  {} as TableInputValues
);

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

  return (
    <AuthConditionalLock>
      <div className='space-y-5'>
        <Heading>Endungstrainer: Nomen</Heading>
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
        {stage === 'results' && <Results handleContinue={handleContinue} />}
      </div>
    </AuthConditionalLock>
  );
};

export default Page;
