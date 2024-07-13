import React from 'react';
import { MAPPER } from '@/utils/mapper';
import { WordProperty } from '@/types';
import { WORD_CONSTANTS } from '@/constants';
import Input from '@/components/Input';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards';
import Select from '@/components/Select';
import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type TrainerInputProps = {
	property: WordProperty;
	value: string;
	appendedString?: string;
	handleChange: (key: WordProperty, value: string) => void;
	correct?: boolean;
};

const TrainerInput = ({ correct, property, handleChange, value, appendedString }: TrainerInputProps) => {
	const options = isWordPropertiesUsingSelectInput(property)
		? WORD_CONSTANTS[property].reduce((object: { [key: string]: string }, element) => {
				object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
				return object;
			}, {})
		: {};
	const correctValueIndicator = correct !== undefined && (correct ? ui.correct : ui.incorrect);

	if (isWordPropertiesUsingSelectInput(property)) {
		return (
			<Select
				label={MAPPER.extended.property[property]}
				options={options}
				className={clsx('w-full', correctValueIndicator)}
				value={value}
				appendString={appendedString}
				handleChange={(value) => handleChange(property, value)}
				disabled={correct !== undefined}
			/>
		);
	} else {
		return (
			<Input
				label={MAPPER.extended.property[property]}
				className={clsx('w-full', correctValueIndicator)}
				value={value + ((appendedString && ' (' + appendedString + ')') || '')}
				onChange={(value) => handleChange(property, value)}
				disabled={correct !== undefined}
			/>
		);
	}
};

export default TrainerInput;
