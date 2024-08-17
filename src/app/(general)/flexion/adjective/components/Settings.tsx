import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCount from '../../components/WordLimit';
import WordSelection from '../../components/WordSelection';
import ContinueButton from '@/components/ContinueButton';
import { Adjective, Word } from '@/types/word';
import { ComparisonDegree, Gender, Comparison } from '@/types/word_constants';

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
  remainingWords: number;
  currentSettingsStage: number;
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
  remainingWords,
  currentSettingsStage
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
      (word: Word) => word.type === 'adjective' && ids.includes(word.id) && word.comparison !== '-'
    ) as Adjective[];
    setValidWords(selectedWords);

    const possibleWords = selectedWords
      .filter((word) => word.comparison !== '-' && comparisons.includes(word.comparison))
      .slice(0, value);

    updateWords(possibleWords, value);
  }, [comparisons, maxUnit, updateWords, value]);

  const enableStart = remainingWords > 0 && comparisonDegrees.length > 0 && (genders.length > 0 || checkAdverb);

  return (
    <>
      {currentSettingsStage === 1 && (
        <WordSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} type='Adjektive' />
      )}
      {currentSettingsStage === 2 && (
        <TestingFormSelection
          checkAdverb={checkAdverb}
          setCheckAdverb={setCheckAdverb}
          comparisons={comparisons}
          setComparisons={setComparisons}
          comparisonDegrees={comparisonDegrees}
          setComparisonDegrees={setComparisonDegrees}
          genders={genders}
          setGenders={setGenders}
          validWords={validWords}
        />
      )}
      {currentSettingsStage === 3 && (
        <WordCount
          testingType={testingType}
          setTestingType={setTestingType}
          inputValue={inputValue}
          updateValue={updateValue}
          disableTables={genders.length === 0}
        />
      )}
      <ContinueButton enableStart={enableStart} handleContinue={handleContinue} />
    </>
  );
};

export default Settings;
