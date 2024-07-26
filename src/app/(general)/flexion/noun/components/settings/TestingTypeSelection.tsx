import SelectButton from '@/components/SelectButton';
import WordCountSelection from './WordCountSelection';

type TestingTypeSelectionProps = {
  testingType: 'table' | 'individual';
  setTestingType: (arg: 'table' | 'individual') => void;
  inputValue: string;
  updateValue: (arg: string) => void;
};

const TestingTypeSelection = ({ testingType, setTestingType, inputValue, updateValue }: TestingTypeSelectionProps) => {
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
      <WordCountSelection testingType={testingType} inputValue={inputValue} updateValue={updateValue} />
    </>
  );
};

export default TestingTypeSelection;
