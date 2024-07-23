import Button from '@/components/Button';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Adjective, Comparison, ComparisonDegree, Gender, Word } from '@/types';
import { isAdjective } from '@/utils/typeguards';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AdjectiveListSelection from './settings/AdjectiveListSelection';
import TestingTypeSelection from './settings/TestingTypeSelection';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCountSelection from './settings/WordCountSelection';

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
      <AdjectiveListSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} />
      <hr className='border-gray-500' />
      <TestingTypeSelection testingType={testingType} setTestingType={setTestingType} />
      <hr className='border-gray-500' />
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
      <hr className='border-gray-500' />
      <WordCountSelection testingType={testingType} inputValue={inputValue} updateValue={updateValue} />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!start}>
        <span>{!start ? 'Keine Adjektive verfügbar' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
