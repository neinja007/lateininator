import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants';
import { Word, WordProperty, WordType } from '@/types';
import { Dispatch, SetStateAction, useState } from 'react';
import ListSelection from './settings/ListSelection';
import WordTypeSelection from './settings/WordTypeSelection';
import CheckTypeSelection from './settings/CheckTypeSelection';
import PropertySelection from './settings/PropertySelection';
import { Stage } from '@/types';

type SettingsProps = {
  checkTranslation: boolean;
  setCheckTranslation: Dispatch<SetStateAction<boolean>>;
  wordPropertiesToCheck: WordProperty[];
  setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
  checkIncorrectWordsAgain: boolean;
  setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
  updateWords: (arg?: Word[]) => void;
  handleContinue: (arg?: Stage) => void;
  enableStart: boolean;
};

const Settings = ({
  checkTranslation,
  setCheckTranslation,
  wordPropertiesToCheck,
  setWordPropertiesToCheck,
  checkIncorrectWordsAgain,
  handleContinue,
  setCheckIncorrectWordsAgain,
  updateWords,
  enableStart
}: SettingsProps) => {
  const [selectedIds, setSelectedIds] = useState<Array<number>>([]);
  const [validWords, setValidWords] = useState<Word[]>([]);

  const [typesToCheck, setTypesToCheck] = useState<Array<WordType>>([...APP_CONSTANTS.mainWordTypes, 'other']);

  return (
    <>
      <ListSelection selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
      <hr />
      <WordTypeSelection
        validWords={validWords}
        setValidWords={setValidWords}
        selectedIds={selectedIds}
        typesToCheck={typesToCheck}
        setTypesToCheck={setTypesToCheck}
      />
      <hr />
      <PropertySelection
        checkTranslation={checkTranslation}
        setCheckTranslation={setCheckTranslation}
        typesToCheck={typesToCheck}
        wordPropertiesToCheck={wordPropertiesToCheck}
        setWordPropertiesToCheck={setWordPropertiesToCheck}
      />
      <hr />
      <CheckTypeSelection
        checkIncorrectWordsAgain={checkIncorrectWordsAgain}
        setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
        validWords={validWords}
        updateWords={updateWords}
      />
      <Button onClick={() => handleContinue()} className='w-full' disabled={!enableStart}>
        <span>{!enableStart ? 'Wähle einige Wörter aus, um fortzufahren' : 'Start'}</span>
      </Button>
    </>
  );
};

export default Settings;
