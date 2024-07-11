import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/common/Button';
import ProgressBar from '@/components/ProgressBar';

type ActionBarProps = {
	setStage: Dispatch<SetStateAction<'settings' | 'test' | 'review' | 'results'>>;
	handleContinue: () => void;
	progressPercentage: number;
};

const ActionBar = ({ setStage, handleContinue, progressPercentage }: ActionBarProps) => {
	return (
		<div className='flex'>
			<Button
				onClick={() => {
					setStage('results');
				}}
			>
				Beenden
			</Button>
			<ProgressBar progressPercentage={progressPercentage} />
			<Button onClick={handleContinue}>Weiter</Button>
		</div>
	);
};

export default ActionBar;
