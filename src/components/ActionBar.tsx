import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { Stage } from '@/types';

type ActionBarProps = {
  form?: boolean;
  handleContinue: (arg?: Stage) => void;
  progressPercentage: number;
};

const ActionBar = ({ handleContinue, progressPercentage, form }: ActionBarProps) => {
  return (
    <div className='flex'>
      <Button
        color='red'
        onClick={() => {
          handleContinue('results');
        }}
        type='button'
      >
        Beenden
      </Button>
      <ProgressBar progressPercentage={progressPercentage} />
      <Button onClick={form ? undefined : () => handleContinue()} color='green' type={form ? 'submit' : 'button'}>
        Weiter
      </Button>
    </div>
  );
};

export default ActionBar;
