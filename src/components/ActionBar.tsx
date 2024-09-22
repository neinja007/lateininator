import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { Stage } from '@/types/other';
import { Ban, ChevronsRight, Coins } from 'lucide-react';

type ActionBarProps = {
  form?: boolean;
  handleContinue: (arg?: Stage) => void;
  progressPercentage: number;
  points?: number;
  difference?: number;
  addDifferenceToPoints?: () => void;
};

const ActionBar = ({
  handleContinue,
  progressPercentage,
  form,
  points,
  difference,
  addDifferenceToPoints
}: ActionBarProps) => {
  return (
    <div className='mt-8 grid grid-cols-2 gap-3 sm:flex'>
      <Button
        color='red'
        className='order-2 flex items-center gap-1'
        onClick={() => {
          addDifferenceToPoints && addDifferenceToPoints();
          handleContinue('results');
        }}
        type='button'
      >
        Beenden <Ban size={16} />
      </Button>
      <div className='order-1 col-span-2 flex w-full sm:order-2'>
        <ProgressBar progressPercentage={progressPercentage} />
        {points !== undefined && (
          <div className='order-3 mr-3 flex items-center gap-1'>
            <Coins size={16} className='text-yellow-500' />
            <b>{points}</b> {!!difference && <span className={'text-green-500'}>+{difference}</span>}
          </div>
        )}
      </div>
      <Button
        onClick={form ? undefined : () => handleContinue()}
        color='green'
        type={form ? 'submit' : 'button'}
        className='order-3 flex items-center gap-1'
      >
        Weiter <ChevronsRight size={20} />
      </Button>
    </div>
  );
};

export default ActionBar;
