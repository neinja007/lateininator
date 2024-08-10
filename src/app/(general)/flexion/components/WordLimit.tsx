import Input from '@/components/Input';
import Button from '@/components/Button';

type WordLimitProps = {
  testingType: 'table' | 'individual';
  setTestingType: (arg: 'table' | 'individual') => void;
  inputValue: string;
  updateValue: (arg: string) => void;
  warningForTables?: boolean;
};

const WordLimit = ({ testingType, setTestingType, inputValue, updateValue, warningForTables }: WordLimitProps) => {
  return (
    <>
      <p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
      <div className='flex space-x-5'>
        <Button
          className='w-1/2 font-medium'
          color={testingType === 'table' ? (warningForTables ? 'orange' : 'blue') : 'default'}
          onClick={() => setTestingType('table')}
        >
          Formen mit Tabellen abfragen
        </Button>
        <Button
          className='w-1/2 font-medium'
          color={testingType === 'individual' ? 'blue' : 'default'}
          onClick={() => setTestingType('individual')}
        >
          Formen einzeln abfragen
        </Button>
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
