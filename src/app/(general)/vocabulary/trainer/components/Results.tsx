import Button from '@/components/Button';
import { Stage } from '@/types';
import { Dispatch, SetStateAction } from 'react';

type ResultsProps = {
	handleContinue: (arg?: Stage) => void;
};

const Results = ({ handleContinue }: ResultsProps) => {
	return (
		<>
			<p>Es wurden einige verschiedene Wörter abgefragt.</p>
			<Button onClick={() => handleContinue('settings')}>Neu Laden</Button>
		</>
	);
};

export default Results;
