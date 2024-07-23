import Button from '@/components/Button';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Noun, Word } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AdjectiveListSelection from './settings/ListSelection';
import TestingTypeSelection from './settings/TestingTypeSelection';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCountSelection from './settings/WordCountSelection';

type SettingsProps = {
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  handleContinue: () => void;
  updateWords: (words: Noun[], count: number) => void;
  start: boolean;
};

const Settings = ({ testingType, setTestingType, handleContinue, updateWords, start }: SettingsProps) => {
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

    const selectedWords: Noun[] = words.filter(
      (word: Word) => word.type === 'noun' && ids.includes(word.id) && word.declension !== '-'
    ) as Noun[];
    setValidWords(selectedWords);

    const possibleWords = selectedWords
      .filter(
        (word) =>
          word.declension !== '-' &&
          word.gender !== '-' &&
          declensions.includes(word.declension) &&
          genders.includes(word.gender)
      )
      .slice(0, value);

    updateWords(possibleWords, value);
  }, [declensions, genders, maxUnit, updateWords, value]);

  return (
    <>
      <AdjectiveListSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} />
      <hr className='border-gray-500' />
      <TestingTypeSelection testingType={testingType} setTestingType={setTestingType} />
      <hr className='border-gray-500' />
      <TestingFormSelection
        declensions={declensions}
        setDeclensions={setDeclensions}
        genders={genders}
        setGenders={setGenders}
      />
      <hr className='border-gray-500' />
      <WordCountSelection testingType={testingType} inputValue={inputValue} updateValue={updateValue} />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!start}>
        <span>{!start ? 'Keine Nomen verfügbar' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
