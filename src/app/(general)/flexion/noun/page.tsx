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
  const { activeWord, maxWords, remainingWords, updateWords, stage, handleContinue } = useGame(
    true,
    testingType === 'individual'
      ? () => setIndividualInputValue('')
      : () => setTableInputValues(initialTableInputValues)
  );

  const [tableInputValues, setTableInputValues] = useState<TableInputValues>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Nomen</Heading>
      {stage === 'settings' && (
        <Settings
          testingType={testingType}
          setTestingType={setTestingType}
          handleContinue={handleContinue}
          updateWords={updateWords}
          start={start}
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
