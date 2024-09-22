import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button from '@/components/Button';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';

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

  const primaryColor = usePrimaryColor();

  return (
    <>
      <p>Abfrage (die Überprüfung kann auch frühzeitig beendet werden):</p>
      <div className='gap-5 space-y-2 md:flex md:space-y-0'>
        <Button
          className='w-full font-medium'
          color={checkType === 'all' ? primaryColor : 'default'}
          onClick={() => setCheckType('all')}
        >
          Alle verfügbaren Wörter ({maxWords}) abfragen
        </Button>
        <Button
          className='w-full font-medium'
          color={checkType === 'limited' ? primaryColor : 'default'}
          onClick={() => setCheckType('limited')}
        >
          Begrenzte Anzahl abfragen
        </Button>
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
            className='w-1/3 text-center'
            type='number'
          />
        )}
      </div>
    </>
  );
};

export default WordCountSelection;
