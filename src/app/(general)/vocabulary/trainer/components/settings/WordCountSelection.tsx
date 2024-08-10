import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import SelectButton from '@/components/SelectButton';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useState } from 'react';

type WordCountSelectionProps = {
  validWords: Word[];
  checkIncorrectWordsAgain: boolean;
  setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
  remainingWords: number;
  inputValue: string;
  updateValue: (value: string) => void;
};

const WordCountSelection = ({
  checkIncorrectWordsAgain,
  setCheckIncorrectWordsAgain,
  remainingWords,
  inputValue,
  updateValue
}: WordCountSelectionProps) => {
  const [checkType, setCheckType] = useState<'all' | 'limited'>('all');

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

export default WordCountSelection;
