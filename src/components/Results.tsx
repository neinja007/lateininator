import Button from '@/components/Button';
import { Stage } from '@/types';

type ResultsProps = {
  handleContinue: (arg?: Stage) => void;
};

const Results = ({ handleContinue }: ResultsProps) => {
  return (
    <div className='flex justify-center'>
      <Button onClick={() => handleContinue('settings')} color='gray'>
        Neu Laden
      </Button>
    </div>
  );
};

export default Results;
