import SelectButton from '@/components/SelectButton';
import Input from '@/components/Input';

type WordLimitProps = {
  testingType: 'table' | 'individual';
  setTestingType: (arg: 'table' | 'individual') => void;
  inputValue: string;
  updateValue: (arg: string) => void;
};

const WordLimit = ({ testingType, setTestingType, inputValue, updateValue }: WordLimitProps) => {
  return (
    <>
      <p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
      <div className='flex space-x-5'>
        <SelectButton
          className='w-1/2 font-medium'
          active={testingType === 'table'}
          handleClick={() => setTestingType('table')}
          label='Formen mit Tabellen abfragen'
        />
        <SelectButton
          className='w-1/2 font-medium'
          active={testingType === 'individual'}
          handleClick={() => setTestingType('individual')}
          label='Formen einzeln abfragen'
        />
      </div>
      <div className='flex justify-center'>
        <Input
          label={`Anzahl der abgefragten ${testingType === 'individual' ? 'Formen' : 'Tabellen'} (max. ${
            testingType === 'individual' ? '100' : '5'
          })`}
          onChange={(value) => updateValue(value)}
          value={inputValue}
          className={'w-full text-center'}
        />
      </div>
    </>
  );
};

export default WordLimit;
