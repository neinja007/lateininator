import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { Stage } from '@/types';

type ActionBarProps = {
  handleContinue: (arg?: Stage) => void;
  progressPercentage: number;
};

const ActionBar = ({ handleContinue, progressPercentage }: ActionBarProps) => {
  return (
    <div className='flex'>
      <Button
        onClick={() => {
          handleContinue('results');
        }}
      >
        Beenden
      </Button>
      <ProgressBar progressPercentage={progressPercentage} />
      <Button onClick={() => handleContinue()}>Weiter</Button>
    </div>
  );
};

export default ActionBar;
