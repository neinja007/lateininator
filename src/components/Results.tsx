import Button from '@/components/Button';
import { Stage } from '@/types/other';

type ResultsProps = {
  handleContinue: (arg?: Stage) => void;
  points: number;
};

const Results = ({ handleContinue, points }: ResultsProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      {points && (
        <div className='text-center'>
          <h2 className='text-2xl font-semibold'>Ergebnisse</h2>
          <p className='my-2 text-lg'>
            Du hast {points} Punkt{points !== 1 ? 'e' : ''} erreicht!
          </p>
          <Button color='purple'>Punkte speichern</Button>
        </div>
      )}
      <Button onClick={() => handleContinue()} color='gray'>
        Neu Laden
      </Button>
    </div>
  );
};

export default Results;
