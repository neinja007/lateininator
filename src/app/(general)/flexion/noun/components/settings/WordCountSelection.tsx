import Input from '@/components/Input';

type WordCountSelectionProps = {
  testingType: 'table' | 'individual';
  inputValue: string;
  updateValue: (arg: string) => void;
};

const WordCountSelection = ({ testingType, inputValue, updateValue }: WordCountSelectionProps) => {
  return (
    <div>
      <Input
        label={`Anzahl der abgefragten ${testingType === 'individual' ? 'Formen' : 'Tabellen'} (max. ${
          testingType === 'individual' ? '100' : '5'
        })`}
        onChange={(value) => updateValue(value)}
        value={inputValue}
        className={'w-full text-center'}
      />
    </div>
  );
};

export default WordCountSelection;
