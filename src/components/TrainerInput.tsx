import React from 'react';
import Input from '@/components/Input';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type TrainerInputProps = {
	label: string;
	value: string;
	appendedString?: string;
	handleChange: (...args: any[]) => void;
	correct?: boolean;
};

const TrainerInput = ({ label, correct, handleChange, value, appendedString }: TrainerInputProps) => {
	const correctValueIndicator = correct !== undefined && (correct ? ui.correct : ui.incorrect);

	return (
		<Input
			label={label}
			className={clsx('w-full', correctValueIndicator)}
			value={value + ((appendedString && ' (' + appendedString + ')') || '')}
			onChange={handleChange}
			disabled={correct !== undefined}
		/>
	);
};

export default TrainerInput;
