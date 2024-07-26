import Button from '@/components/Button';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Adjective, Comparison, ComparisonDegree, Gender, Word } from '@/types';
import { isAdjective } from '@/utils/typeguards';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCount from '../../components/WordLimit';
import WordSelection from '../../components/WordSelection';

type SettingsProps = {
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  checkAdverb: boolean;
  setCheckAdverb: Dispatch<SetStateAction<boolean>>;
  comparisonDegrees: ComparisonDegree[];
  setComparisonDegrees: Dispatch<SetStateAction<ComparisonDegree[]>>;
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
  handleContinue: () => void;
  updateWords: (words: Adjective[], count: number) => void;
  start: boolean;
};

const Settings = ({
  testingType,
  setTestingType,
  checkAdverb,
  setCheckAdverb,
  comparisonDegrees,
  setComparisonDegrees,
  genders,
  setGenders,
  handleContinue,
  updateWords,
  start
}: SettingsProps) => {
  const [validWords, setValidWords] = useState<Adjective[]>([]);
  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [maxUnit, setMaxUnit] = useState(lists.length);

  const [comparisons, setComparisons] = useState<Comparison[]>([...WORD_CONSTANTS.comparison]);

  useEffect(() => {
    const ids = lists
      .filter((list) => list.id <= maxUnit)
      .reduce((acc: any, list) => {
        return acc.concat(list.words);
      }, []);

    const selectedWords: Adjective[] = words.filter(
      (word: Word) => isAdjective(word) && ids.includes(word.id) && word.comparison !== '-'
    ) as Adjective[];
    setValidWords(selectedWords);

    const possibleWords = selectedWords
      .filter((word) => word.comparison !== '-' && comparisons.includes(word.comparison))
      .slice(0, value);

    updateWords(possibleWords, value);
  }, [comparisons, maxUnit, updateWords, value]);

  return (
    <>
      <WordSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} type='Adjektive' />
      <hr className='dark:border-gray-500' />
      <WordCount
        testingType={testingType}
        setTestingType={setTestingType}
        inputValue={inputValue}
        updateValue={updateValue}
      />
      <hr className='dark:border-gray-500' />
      <TestingFormSelection
        checkAdverb={checkAdverb}
        setCheckAdverb={setCheckAdverb}
        comparisons={comparisons}
        setComparisons={setComparisons}
        comparisonDegrees={comparisonDegrees}
        setComparisonDegrees={setComparisonDegrees}
        genders={genders}
        setGenders={setGenders}
      />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!start} color={start ? 'green' : 'gray'}>
        <span>{!start ? 'Keine Adjektive verfügbar' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
