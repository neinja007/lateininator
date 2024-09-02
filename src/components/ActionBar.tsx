import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { Stage } from '@/types/other';

type ActionBarProps = {
  form?: boolean;
  handleContinue: (arg?: Stage) => void;
  progressPercentage: number;
};

const ActionBar = ({ handleContinue, progressPercentage, form }: ActionBarProps) => {
  return (
    <div className='mt-8 grid grid-cols-2 gap-3 sm:flex'>
      <Button
        color='red'
        className='order-2'
        onClick={() => {
          handleContinue('results');
        }}
        type='button'
      >
        Beenden
      </Button>
      <ProgressBar progressPercentage={progressPercentage} />
      <Button
        onClick={form ? undefined : () => handleContinue()}
        color='green'
        type={form ? 'submit' : 'button'}
        className='order-3'
      >
        Weiter
      </Button>
    </div>
  );
};

export default ActionBar;
