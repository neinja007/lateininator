import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FormSelection from './settings/FormSelection';
import WordCount from '../../components/WordLimit';
import ListSelection from '../../components/ListSelection';
import ContinueButton from '@/components/ContinueButton';
import { Noun } from '@/types/word';
import { WORD_CONSTANTS } from '@/constants/wordConstants';

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

  const [maxUnit, setMaxUnit] = useState(lists.length);
  const [genders, setGenders] = useState([...WORD_CONSTANTS.gender]);
  const [declensions, setDeclensions] = useState([...WORD_CONSTANTS.declension]);

  useEffect(() => {
    const ids = lists
      .filter((list) => list.id <= maxUnit)
      .reduce((acc: any, list) => {
        return acc.concat(list.words);
      }, []);

    const selectedWords = words.filter(
      (word) => word.type === 'noun' && ids.includes(word.id) && word.declension !== '-' && word.gender !== '-'
    ) as Noun[];
    setValidWords(selectedWords);

    const possibleWords = selectedWords.filter(
      (word) =>
        word.declension !== '-' &&
        word.gender !== '-' &&
        declensions.includes(word.declension) &&
        genders.includes(word.gender)
    );

    updateWords(possibleWords, value);
  }, [declensions, genders, maxUnit, updateWords, value]);

  return (
    <>
      {currentSettingsStage === 1 && (
        <ListSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} type='Nomen' />
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
