import Button from '@/components/Button';
import { useAddPoints } from '@/hooks/database/mutations/useAddPoints';
import { Stage } from '@/types/other';
import { useState } from 'react';

type ResultsProps = {
  handleContinue: (arg?: Stage) => void;
  points: number;
};

const Results = ({ handleContinue, points }: ResultsProps) => {
  const { mutate: addPoints, status } = useAddPoints('increment');
  const [saved, setSaved] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      {!!points && (
        <div className='text-center'>
          <h2 className='text-2xl font-semibold'>Ergebnisse</h2>
          <p className='my-2 text-lg'>
            Du hast {points} Punkt{points !== 1 ? 'e' : ''} erreicht!
          </p>
          {!saved && (
            <Button
              color='purple'
              onClick={() => {
                addPoints(points);
                setSaved(true);
              }}
              disabled={status === 'pending'}
            >
              Punkte speichern
            </Button>
          )}
        </div>
      )}
      <Button onClick={() => handleContinue()} color='gray'>
        Neu Laden
      </Button>
    </div>
  );
};

export default Results;
