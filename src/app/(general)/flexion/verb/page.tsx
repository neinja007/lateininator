'use client';

import { useState } from 'react';
import { WORD_CONSTANTS } from '@/constants';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { TableInputValues } from './types';
import { Voice, Modus, Tense } from '@/types/word_constants';

const initialTableInputValues: TableInputValues = {
  pres: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: ''
    }
  },
  impe: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: ''
    }
  },
  perf: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: ''
    }
  },
  plus: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: ''
    }
  },
  fut1: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: ''
    }
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
  const [voices, setVoices] = useState<Voice[]>([...WORD_CONSTANTS.voice]);
  const [modi, setModi] = useState<Modus[]>([...WORD_CONSTANTS.modus]);
  const [tenses, setTenses] = useState<Tense[]>([...WORD_CONSTANTS.tense]);
  const [checkImperative, setCheckImperative] = useState<boolean>(true);

  const [tableInputValues, setTableInputValues] = useState<TableInputValues>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Verben</Heading>
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
        activeWord.type === 'verb' &&
        activeWord.conjugation !== '-' && (
          <Test
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
      {stage === 'results' && <Results handleContinue={handleContinue} />}
    </div>
  );
};

export default Page;
