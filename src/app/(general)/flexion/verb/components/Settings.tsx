import Button from '@/components/Button';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Conjugation, Modus, Tense, Verb, Voice, Word } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ListSelection from './settings/ListSelection';
import TestingTypeSelection from './settings/TestingTypeSelection';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCountSelection from './settings/WordCountSelection';

type SettingsProps = {
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  voices: Voice[];
  setVoices: Dispatch<SetStateAction<Voice[]>>;
  modi: Modus[];
  setModi: Dispatch<SetStateAction<Modus[]>>;
  tenses: Tense[];
  setTenses: Dispatch<SetStateAction<Tense[]>>;
  handleContinue: () => void;
  updateWords: (words: Verb[], count: number) => void;
  start: boolean;
};

const Settings = ({
  testingType,
  setTestingType,
  handleContinue,
  updateWords,
  start,
  modi,
  setModi,
  setTenses,
  setVoices,
  tenses,
  voices
}: SettingsProps) => {
  const [validWords, setValidWords] = useState<Array<Verb>>([]);
  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [maxUnit, setMaxUnit] = useState(lists.length);

  const [conjugations, setConjugations] = useState<Array<Conjugation>>([...WORD_CONSTANTS.conjugation]);

  useEffect(() => {
    const ids = lists
      .filter((list) => list.id <= maxUnit)
      .reduce((acc: any, list) => {
        return acc.concat(list.words);
      }, []);

    const selectedWords: Verb[] = words.filter(
      (word: Word) => word.type === 'verb' && ids.includes(word.id) && word.conjugation !== '-'
    ) as Verb[];
    setValidWords(selectedWords);

    const possibleWords = selectedWords
      .filter((word) => word.conjugation !== '-' && conjugations.includes(word.conjugation))
      .slice(0, value);

    updateWords(possibleWords, value);
  }, [conjugations, maxUnit, updateWords, value]);

  return (
    <>
      <ListSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} />
      <hr className='border-gray-500' />
      <TestingTypeSelection testingType={testingType} setTestingType={setTestingType} />
      <hr className='border-gray-500' />
      <TestingFormSelection
        conjugations={conjugations}
        setConjugations={setConjugations}
        modi={modi}
        setModi={setModi}
        tenses={tenses}
        setTenses={setTenses}
        voices={voices}
        setVoices={setVoices}
      />
      <hr className='border-gray-500' />
      <WordCountSelection testingType={testingType} inputValue={inputValue} updateValue={updateValue} />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!start}>
        <span>{!start ? 'Keine Verben verfügbar' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
