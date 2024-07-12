import Button from '@/components/Button';
import { Stage } from '@/hooks/useStage';
import { Dispatch, SetStateAction } from 'react';

type ResultsProps = {
	setStage: Dispatch<SetStateAction<Stage>>;
};

const Results = ({ setStage }: ResultsProps) => {
	return (
		<>
			<p>Es wurden einige verschiedene Wörter abgefragt.</p>
			<Button onClick={() => setStage('settings')}>Neu Laden</Button>
		</>
	);
};

export default Results;
