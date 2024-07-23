'use client';

import { WordCase, Comparison, ComparisonDegree, Gender, Numerus, Word } from '@/types';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { Fragment, useEffect, useState } from 'react';
import { getForm } from '@/utils/wordUtils';
import { WORD_CONSTANTS } from '@/constants';
import { isAdjective } from '@/utils/typeguards';
import { MAPPER } from '@/utils/mapper';
import ActionBar from '@/components/ActionBar';
import Heading from '@/components/Heading';
import WordDisplay from '@/components/WordDisplay';
import { useNumberInput } from '@/hooks/useNumberInput';
import { getRandomItem } from '@/utils/propertyUtils';
import { useGame } from '@/hooks/useGame';
import table from '@/styles/table.module.css';
import TrainerInput from '@/components/TrainerInput';
import Results from '@/components/Results';
import Settings from './components/Settings';
import Test from './components/Test';

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

  const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>([
    ...WORD_CONSTANTS.comparisonDegree
  ]);
  const [genders, setGenders] = useState<Array<Gender>>([...WORD_CONSTANTS.gender]);
  const [checkAdverb, setCheckAdverb] = useState(true);

  const [tableInputValues, setTableInputValues] = useState<typeof initialTableInputValues>(initialTableInputValues);
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
      {(stage === 'test' || stage === 'review') && activeWord && (
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
