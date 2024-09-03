import { useNumberInput } from '@/hooks/useNumberInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FormSelection from './settings/FormSelection';
import WordCount from '../../components/WordLimit';
import ContinueButton from '@/components/ContinueButton';
import { Noun, Word } from '@/types/word';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import ListSelection from '@/components/ListSelection';
import { isNoun } from '@/utils/typeguards/isNoun';

type SettingsProps = {
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  handleContinue: () => void;
  updateWords: (words: Noun[], count: number) => void;
  remainingWords: number;
  currentSettingsStage: number;
};

const Settings = ({
  testingType,
  setTestingType,
  handleContinue,
  updateWords,
  remainingWords,
  currentSettingsStage
}: SettingsProps) => {
  const [validWords, setValidWords] = useState<Noun[]>([]);
  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [genders, setGenders] = useState([...WORD_CONSTANTS.gender]);
  const [declensions, setDeclensions] = useState([...WORD_CONSTANTS.declension]);

  useEffect(() => {
    const selectedNouns = selectedWords.filter(
      (word) => isNoun(word) && word.noun.declension !== 'NONE' && word.noun.gender !== 'NONE'
    ) as Noun[];
    setValidWords(selectedNouns);

    const possibleWords = selectedNouns.filter(
      (word) =>
        word.noun.declension !== 'NONE' &&
        word.noun.gender !== 'NONE' &&
        declensions.includes(word.noun.declension) &&
        genders.includes(word.noun.gender)
    );

    updateWords(possibleWords, value);
  }, [declensions, genders, selectedWords, updateWords, value]);

  return (
    <>
      {currentSettingsStage === 1 && (
        <ListSelection onlyAcceptType='NOUN' selectedWords={selectedWords} setSelectedWords={setSelectedWords} />
      )}
      {currentSettingsStage === 2 && (
        <FormSelection
          validWords={validWords}
          declensions={declensions}
          setDeclensions={setDeclensions}
          genders={genders}
          setGenders={setGenders}
        />
      )}
      {currentSettingsStage === 3 && (
        <WordCount
          testingType={testingType}
          setTestingType={setTestingType}
          inputValue={inputValue}
          updateValue={updateValue}
        />
      )}
      <ContinueButton enableStart={remainingWords > 0} handleContinue={handleContinue} />
    </>
  );
};

export default Settings;
