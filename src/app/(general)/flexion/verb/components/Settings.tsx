import { useNumberInput } from '@/hooks/useNumberInput';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FormSelection from './settings/FormSelection';
import WordCount from '../../components/WordLimit';
import ContinueButton from '@/components/ContinueButton';
import { Verb, Word } from '@/types/word';
import { Voice, Modus, Tense, Conjugation } from '@/types/wordConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { isVerb } from '@/utils/typeguards/isVerb';
import ListSelection from '@/components/ListSelection';

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
  remainingWords: number;
  currentSettingsStage: number;
};

const Settings = ({
  currentSettingsStage,
  testingType,
  setTestingType,
  handleContinue,
  updateWords,
  remainingWords,
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

  const [conjugations, setConjugations] = useState<Conjugation[]>([...WORD_CONSTANTS.conjugation]);

  const [selectedWords, setSelectedWords] = useState<Word[]>([]);

  useEffect(() => {
    const selectedVerbs: Verb[] = selectedWords.filter(
      (word: Word) => isVerb(word) && word.verb.conjugation !== 'NONE'
    ) as Verb[];
    setValidWords(selectedVerbs);

    const possibleWords = selectedVerbs.filter(
      (word) => word.verb.conjugation !== 'NONE' && conjugations.includes(word.verb.conjugation)
    );

    updateWords(possibleWords, value);
  }, [conjugations, selectedWords, updateWords, value]);

  const enableStart =
    remainingWords > 0 &&
    modi.length > 0 &&
    tenses.length > 0 &&
    (modi.includes('ind') || tenses.length > 1 || !tenses.includes('fut1')) &&
    voices.length > 0;

  return (
    <>
      {currentSettingsStage === 1 && (
        <ListSelection selectedWords={selectedWords} setSelectedWords={setSelectedWords} />
      )}
      {currentSettingsStage === 2 && (
        <FormSelection
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
      )}
      {currentSettingsStage === 3 && (
        <WordCount
          testingType={testingType}
          setTestingType={setTestingType}
          inputValue={inputValue}
          updateValue={updateValue}
          disableTablesBreakpoint='lg'
        />
      )}
      <ContinueButton enableStart={enableStart} handleContinue={handleContinue} />
    </>
  );
};

export default Settings;
