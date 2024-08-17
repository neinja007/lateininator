import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import SelectButton from '@/components/SelectButton';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type WordCountSelectionProps = {
  checkIncorrectWordsAgain: boolean;
  setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
  updateValue: (value: string) => void;
  maxWords: number;
};

const WordCountSelection = ({
  maxWords,
  checkIncorrectWordsAgain,
  setCheckIncorrectWordsAgain,
  inputValue,
  updateValue
}: WordCountSelectionProps) => {
  const [checkType, setCheckType] = useState<'all' | 'limited'>('all');

  useEffect(() => {
    if (checkType === 'all') {
      updateValue(maxWords.toString());
    } else {
      setCheckIncorrectWordsAgain(false);
    }
  }, [checkType, maxWords, setCheckIncorrectWordsAgain, updateValue]);

  return (
    <>
      <p>Abfrage (die Überprüfung kann auch frühzeitig beendet werden):</p>
      <div className='flex space-x-5'>
        <SelectButton
          className='w-1/2 font-medium'
          active={checkType === 'all'}
          handleClick={() => setCheckType('all')}
          label={`Alle verfügbaren Wörter (${maxWords}) abfragen`}
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
            label={`Anzahl der abgefragten Wörter (max. ${maxWords})`}
            onChange={updateValue}
            value={inputValue}
            className={'w-1/3 text-center'}
          />
        )}
      </div>
    </>
  );
};

export default WordCountSelection;
