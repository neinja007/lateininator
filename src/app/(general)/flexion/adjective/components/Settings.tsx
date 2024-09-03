import { useNumberInput } from '@/hooks/useNumberInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import WordCount from '../../components/WordLimit';
import ContinueButton from '@/components/ContinueButton';
import { Adjective, Word } from '@/types/word';
import { ComparisonDegree, Gender, Comparison } from '@/types/wordConstants';
import FormSelection from './settings/FormSelection';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { isAdjective } from '@/utils/typeguards/isAdjective';
import ListSelection from '@/components/ListSelection';

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

  const [selectedWords, setSelectedWords] = useState<Word[]>([]);

  const [comparisons, setComparisons] = useState<Comparison[]>([...WORD_CONSTANTS.comparison]);

  useEffect(() => {
    const selectedAdjective: Adjective[] = selectedWords.filter(
      (word: Word) => isAdjective(word) && word.adjective.comparison !== 'NONE'
    ) as Adjective[];
    setValidWords(selectedAdjective);

    const possibleWords = selectedAdjective.filter(
      (word) => word.adjective.comparison !== 'NONE' && comparisons.includes(word.adjective.comparison)
    );

    updateWords(possibleWords, value);
  }, [comparisons, selectedWords, updateWords, value]);

  const enableStart = remainingWords > 0 && comparisonDegrees.length > 0 && (genders.length > 0 || checkAdverb);

  return (
    <>
      {currentSettingsStage === 1 && (
        <ListSelection selectedWords={selectedWords} setSelectedWords={setSelectedWords} />
      )}
      {currentSettingsStage === 2 && (
        <FormSelection
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
          disableTablesBreakpoint='md'
        />
      )}
      <ContinueButton enableStart={enableStart} handleContinue={handleContinue} />
    </>
  );
};

export default Settings;
