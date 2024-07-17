import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import SelectButton from '@/components/SelectButton';
import Input from '@/components/Input';
import { Word } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNumberInput } from '@/hooks/useNumberInput';

type CheckTypeSelectionProps = {
  validWords: Word[];
  checkIncorrectWordsAgain: boolean;
  setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
  updateWords: (arg?: Word[]) => void;
};

const CheckTypeSelection = ({
  checkIncorrectWordsAgain,
  setCheckIncorrectWordsAgain,
  validWords,
  updateWords
}: CheckTypeSelectionProps) => {
  const [checkType, setCheckType] = useState<'all' | 'limited'>('all');
  const { value, inputValue, updateValue } = useNumberInput(validWords.length);

  useEffect(() => {
    updateWords(validWords.slice(0, value));
  }, [updateWords, validWords, value]);

  return (
    <>
      <p>Abfrage (die Überprüfung kann auch frühzeitig beendet werden):</p>
      <div className='flex space-x-5'>
        <SelectButton
          className='w-1/2 font-medium'
          active={checkType === 'all'}
          handleClick={() => setCheckType('all')}
          label={`Alle verfügbaren Wörter (${validWords.length}) abfragen`}
        />
        <SelectButton
          className='w-1/2 font-medium'
          active={checkType === 'limited'}
          handleClick={() => setCheckType('limited')}
          label='Begrenzte Anzahl abfragen'
        />
      </div>
      <div className='text-center'>
        {checkType === 'all' ? (
          <CheckboxWithLabel
            checked={checkIncorrectWordsAgain}
            handleChange={setCheckIncorrectWordsAgain}
            label='Bei Fehlern Wörter nochmals abprüfen'
          />
        ) : (
          <Input
            label={`Anzahl der abgefragten Wörter (max. ${validWords.length})`}
            onChange={updateValue}
            value={inputValue}
            className={'w-1/3 text-center'}
          />
        )}
      </div>
    </>
  );
};

export default CheckTypeSelection;
