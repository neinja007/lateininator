import Input from '@/components/Input';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useWidth } from '@/hooks/useWidth';
import { Breakpoint } from '@/types/other';

type WordLimitProps = {
  testingType: 'table' | 'individual';
  setTestingType: (arg: 'table' | 'individual') => void;
  inputValue: string;
  updateValue: (arg: string) => void;
  disableTables?: boolean;
  disableTablesOnBreakpoint?: Breakpoint;
};

const WordLimit = ({
  disableTablesOnBreakpoint,
  testingType,
  setTestingType,
  inputValue,
  updateValue,
  disableTables
}: WordLimitProps) => {
  const [disableTablesBecauseOfWidth, setDisableTablesBecauseOfWidth] = useState(false);

  useEffect(() => {
    if (disableTables && testingType === 'table') {
      setTestingType('individual');
    }
  }, [disableTables, setTestingType, testingType]);

  useWidth(
    disableTablesOnBreakpoint,
    () => {
      if (testingType === 'table') {
        setTestingType('individual');
      }
      !disableTablesBecauseOfWidth && setDisableTablesBecauseOfWidth(true);
    },
    () => {
      setDisableTablesBecauseOfWidth(false);
    }
  );

  return (
    <>
      <p>Wählen Sie aus, wie Sie abgefragt werden möchten.</p>
      {disableTablesBecauseOfWidth && (
        <p className='text-yellow-500'>
          Aufgrund eines zu engen Displays können wir die Formen nicht in der Tabellenform abfragen.
        </p>
      )}
      <div className='gap-5 space-y-2 md:flex md:space-y-0'>
        <Button
          disabled={disableTables || disableTablesBecauseOfWidth}
          className='w-full font-medium'
          color={testingType === 'table' ? 'blue' : 'default'}
          onClick={() => setTestingType('table')}
        >
          Formen mit Tabellen abfragen
        </Button>
        <Button
          className='w-full font-medium'
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
