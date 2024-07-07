import { mapper } from '@/data/mapper';
import { Word, WordInputKey } from '@/data/types';
import Select from './ui/Select';
import { properties } from '@/data/properties';
import Input from './ui/Input';

type TrainerInputProps = {
	inputKey: WordInputKey;
	value: string;
	handleChange: (key: WordInputKey, value: string) => void;
	correct?: boolean | null;
};

const TrainerInput = ({ correct, inputKey, handleChange, value }: TrainerInputProps) => {
	let evaluationClasses = correct !== null ? (correct ? '!bg-green-300 border-none' : '!bg-red-300 border-none') : '';

	if (inputKey === 'declension' || inputKey === 'conjugation' || inputKey === 'gender' || inputKey === 'comparison') {
		return (
			<Select
				label={mapper.extended.wordKey[inputKey]}
				options={properties[inputKey].reduce((object: { [key: string]: string }, element) => {
					object[element] = (mapper.extended[inputKey] as { [key: string]: string })[element];
					return object;
				}, {})}
				className={'w-full ' + evaluationClasses}
				value={value}
				handleChange={(value) => handleChange(inputKey, value)}
				disabled={correct !== null}
			/>
		);
	} else {
		return (
			<Input
				label={mapper.extended.wordKey[inputKey]}
				className={'w-full ' + evaluationClasses}
				value={value}
				handleChange={(value) => handleChange(inputKey, value)}
				disabled={correct !== null}
			/>
		);
	}
};

export default TrainerInput;
