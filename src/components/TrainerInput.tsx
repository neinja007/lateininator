import React from 'react';
import { MAPPER } from '@/utils/mapper';
import { WordProperty } from '@/types';
import { WORD_CONSTANTS } from '@/constants';
import Input from '@/components/Input';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards';
import Select from '@/components/Select';

type TrainerInputProps = {
	property: WordProperty;
	value: string;
	handleChange: (key: WordProperty, value: string) => void;
	correct?: boolean | null;
};

const TrainerInput = ({ correct, property, handleChange, value }: TrainerInputProps) => {
	const evaluationClasses = `w-full ${
		correct === null ? '' : correct ? '!bg-green-300 border-none' : '!bg-red-300 border-none'
	}`;
	const Component = isWordPropertiesUsingSelectInput(property) ? Select : Input;
	const options = isWordPropertiesUsingSelectInput(property)
		? WORD_CONSTANTS[property].reduce((object: { [key: string]: string }, element) => {
				object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
				return object;
		  }, {})
		: {};

	return (
		<Component
			label={MAPPER.extended.wordProperty[property]}
			options={options}
			className={evaluationClasses}
			value={value}
			handleChange={(value) => handleChange(property, value)}
			disabled={correct !== null}
		/>
	);
};

export default TrainerInput;
