'use client';

import { Numerus, Tense, Person, Voice, Modus } from '@/types';
import { useState } from 'react';
import { WORD_CONSTANTS } from '@/constants';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';

const initialTableInputValues: Record<Tense, Record<Numerus, Record<Person, string>>> = {
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
  const { activeWord, maxWords, remainingWords, updateWords, stage, handleContinue } = useGame(
    true,
    testingType === 'individual'
      ? () => setIndividualInputValue('')
      : () => setTableInputValues(initialTableInputValues)
  );
  const [voices, setVoices] = useState<Voice[]>([...WORD_CONSTANTS.voice]);
  const [modi, setModi] = useState<Modus[]>([...WORD_CONSTANTS.modus]);
  const [tenses, setTenses] = useState<Tense[]>([...WORD_CONSTANTS.tense]);

  const [tableInputValues, setTableInputValues] =
    useState<Record<Tense, Record<Numerus, Record<Person, string>>>>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Verben</Heading>
      {stage === 'settings' && (
        <Settings
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
          start={start}
        />
      )}
      {(stage === 'test' || stage === 'review') &&
        activeWord &&
        activeWord.type === 'verb' &&
        activeWord.conjugation !== '-' && (
          <Test
            activeWord={activeWord}
            testingType={testingType}
            stage={stage}
            tableInputValues={tableInputValues}
            setTableInputValues={setTableInputValues}
            maxWords={maxWords}
            remainingWords={remainingWords}
            handleContinue={handleContinue}
            modi={modi}
            voices={voices}
            tenses={tenses}
            individualInputValue={individualInputValue}
            setIndividualInputValue={setIndividualInputValue}
          />
        )}
      {stage === 'results' && <Results handleContinue={handleContinue} />}
    </div>
  );
};

export default Page;
