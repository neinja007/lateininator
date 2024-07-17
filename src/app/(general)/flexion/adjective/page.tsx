'use client';

import { Adjective, WordCase, Comparison, ComparisonDegree, Gender, Numerus, Word } from '@/types';
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

  const [maxUnit, setMaxUnit] = useState(lists.length);
  const [validWords, setValidWords] = useState<Array<Adjective>>([]);

  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [comparisons, setComparisons] = useState<Array<Comparison>>([...WORD_CONSTANTS.comparison]);
  const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>([
    ...WORD_CONSTANTS.comparisonDegree
  ]);
  const [genders, setGenders] = useState<Array<Gender>>([...WORD_CONSTANTS.gender]);
  const [checkAdverb, setCheckAdverb] = useState(true);

  const [individualInputValue, setIndividualInputValue] = useState<string>('');
  const [individualInputForm, setIndividualInputForm] = useState<{
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
    gender: Gender;
    numerus: Numerus;
    wordCase: WordCase;
  }>();

  const [tableInputForm, setTableInputForm] = useState<{
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
  }>();
  const [tableInputValues, setTableInputValues] = useState<typeof initialTableInputValues>(initialTableInputValues);

  useEffect(() => {
    if (stage === 'settings') {
      const ids = lists
        .filter((list) => list.id < maxUnit)
        .reduce((acc: any, list) => {
          return acc.concat(list.words);
        }, []);

      const selectedWords: Adjective[] = words.filter(
        (word: Word) => isAdjective(word) && ids.includes(word.id) && word.comparison !== '-'
      ) as Adjective[];
      setValidWords(selectedWords);

      const possibleWords = selectedWords
        .filter((word) => 'comparison' in word && word.comparison !== '-' && comparisons.includes(word.comparison))
        .slice(0, value);

      updateWords(possibleWords);
    }
  }, [comparisons, maxUnit, stage, updateWords, value]);

  useEffect(() => {
    if (!activeWord || !isAdjective(activeWord)) return;
    if (testingType === 'individual') {
      activeWord &&
        isAdjective(activeWord) &&
        setIndividualInputForm({
          comparison: activeWord.comparison as Comparison,
          comparisonDegree: getRandomItem(comparisonDegrees),
          numerus: getRandomItem(['sin', 'plu']),
          wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase,
          gender: getRandomItem(genders)
        });
    } else {
      setTableInputForm({
        comparison: activeWord.comparison as Comparison,
        comparisonDegree: getRandomItem(comparisonDegrees)
      });
    }
  }, [activeWord, comparisonDegrees, genders, testingType]);

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Adjektive</Heading>
      {stage === 'settings' && (
        <Settings
          maxUnit={maxUnit}
          setMaxUnit={setMaxUnit}
          validWords={validWords}
          testingType={testingType}
          setTestingType={setTestingType}
          checkAdverb={checkAdverb}
          setCheckAdverb={setCheckAdverb}
          comparisons={comparisons}
          setComparisons={setComparisons}
          comparisonDegrees={comparisonDegrees}
          setComparisonDegrees={setComparisonDegrees}
          genders={genders}
          setGenders={setGenders}
          updateValue={updateValue}
          inputValue={inputValue}
          handleContinue={handleContinue}
          start={start}
        />
      )}
      {(stage === 'test' || stage === 'review') && activeWord && (
        <Test
          activeWord={activeWord}
          testingType={testingType}
          individualInputForm={individualInputForm}
          individualInputValue={individualInputValue}
          setIndividualInputValue={setIndividualInputValue}
          stage={stage}
          tableInputForm={tableInputForm}
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
