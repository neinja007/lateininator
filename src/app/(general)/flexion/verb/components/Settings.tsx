import Button from '@/components/Button';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { useNumberInput } from '@/hooks/useNumberInput';
import { Conjugation, Modus, Tense, Verb, Voice, Word } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TestingFormSelection from './settings/TestingFormSelection';
import WordCount from '../../components/WordLimit';
import WordSelection from '../../components/WordSelection';
import Hr from '@/components/Hr';

type SettingsProps = {
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  voices: Voice[];
  setVoices: Dispatch<SetStateAction<Voice[]>>;
  modi: Modus[];
  setModi: Dispatch<SetStateAction<Modus[]>>;
  tenses: Tense[];
  setTenses: Dispatch<SetStateAction<Tense[]>>;
  checkImperative: boolean;
  setCheckImperative: Dispatch<SetStateAction<boolean>>;
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
  voices,
  checkImperative,
  setCheckImperative
}: SettingsProps) => {
  const [validWords, setValidWords] = useState<Verb[]>([]);
  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [maxUnit, setMaxUnit] = useState(lists.length);

  const [conjugations, setConjugations] = useState<Conjugation[]>([...WORD_CONSTANTS.conjugation]);

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
      <WordSelection maxUnit={maxUnit} setMaxUnit={setMaxUnit} validWords={validWords} type='Verben' />
      <Hr />
      <WordCount
        testingType={testingType}
        setTestingType={setTestingType}
        inputValue={inputValue}
        updateValue={updateValue}
      />
      <Hr />
      <TestingFormSelection
        checkImperative={checkImperative}
        setCheckImperative={setCheckImperative}
        conjugations={conjugations}
        setConjugations={setConjugations}
        modi={modi}
        setModi={setModi}
        tenses={tenses}
        setTenses={setTenses}
        voices={voices}
        setVoices={setVoices}
        validWords={validWords}
      />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!start} color={start ? 'green' : 'gray'}>
        <span>{!start ? 'Keine Verben verfügbar' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
