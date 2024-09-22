import Button from '@/components/Button';
import { usePoints } from '@/hooks/database/queries/usePoints';
import { Stage } from '@/types/other';

type ResultsProps = {
  handleContinue: (arg?: Stage) => void;
  points?: number;
};

const Results = ({ handleContinue, points }: ResultsProps) => {
  const { data: newPoints } = usePoints();

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      {!!points && (
        <p className='my-2'>
          Du hast{' '}
          <b>
            {points} Punkt{points !== 1 ? 'e' : ''}
          </b>{' '}
          erreicht. Diese wurden bereits in die <b>Gesamtpunkte</b> miteinberechnet ({newPoints - points} + {points} ={' '}
          <b>{newPoints}</b>)
        </p>
      )}
      <Button onClick={() => handleContinue()} color='gray'>
        Neu Laden
      </Button>
    </div>
  );
};

export default Results;
