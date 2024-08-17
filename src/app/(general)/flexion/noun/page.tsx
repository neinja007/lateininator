'use client';

import { useState } from 'react';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';

const initialTableInputValues: TableInputValues = {
  sin: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  },
  plu: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  }
};

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
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Nomen</Heading>
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
      {(stage === 'test' || stage === 'review') && activeWord && activeWord.type === 'noun' && (
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
  );
};

export default Page;
