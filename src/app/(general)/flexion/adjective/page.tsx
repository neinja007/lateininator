'use client';

import { WordCase, ComparisonDegree, Gender, Numerus, Word } from '@/types';
import { useState } from 'react';
import { WORD_CONSTANTS } from '@/constants';
import Heading from '@/components/Heading';
import { useGame } from '@/hooks/useGame';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';
import { isAdjective } from '@/utils/typeguards';

const initialTableInputValues: Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>> = {
  m: {
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
  },
  f: {
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
  },
  n: {
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

  const [comparisonDegrees, setComparisonDegrees] = useState<ComparisonDegree[]>([...WORD_CONSTANTS.comparisonDegree]);
  const [genders, setGenders] = useState<Gender[]>([...WORD_CONSTANTS.gender]);
  const [checkAdverb, setCheckAdverb] = useState(true);

  const [tableInputValues, setTableInputValues] =
    useState<Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>>>(initialTableInputValues);
  const [individualInputValue, setIndividualInputValue] = useState<string>('');

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Adjektive</Heading>
      {stage === 'settings' && (
        <Settings
          testingType={testingType}
          setTestingType={setTestingType}
          checkAdverb={checkAdverb}
          setCheckAdverb={setCheckAdverb}
          comparisonDegrees={comparisonDegrees}
          setComparisonDegrees={setComparisonDegrees}
          genders={genders}
          setGenders={setGenders}
          handleContinue={handleContinue}
          updateWords={updateWords}
          start={start}
        />
      )}
      {(stage === 'test' || stage === 'review') && activeWord && isAdjective(activeWord) && (
        <Test
          activeWord={activeWord}
          testingType={testingType}
          stage={stage}
          tableInputValues={tableInputValues}
          setTableInputValues={setTableInputValues}
          maxWords={maxWords}
          remainingWords={remainingWords}
          handleContinue={handleContinue}
          comparisonDegrees={comparisonDegrees}
          genders={genders}
          individualInputValue={individualInputValue}
          setIndividualInputValue={setIndividualInputValue}
        />
      )}
      {stage === 'results' && <Results handleContinue={handleContinue} />}
    </div>
  );
};

export default Page;
