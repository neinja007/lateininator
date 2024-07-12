import { useState } from 'react';

export const useNumberInput = (
	max: number
): { value: number; inputValue: string; updateValue: (arg: string) => void } => {
	const [value, setValue] = useState<number>(0);
	const [inputValue, setInputValue] = useState<string>('');

	const updateValue = (value: string) => {
		if (isNaN(parseInt(value, 10)) || parseInt(value, 10).toString() !== value) {
			setValue(0);
			setInputValue('');
		} else {
			const newValue: number = parseInt(value, 10) > max ? max : parseInt(value, 10) < 0 ? 0 : parseInt(value, 10);
			setValue(newValue);
			setInputValue(newValue.toString());
		}
	};

	return { value, inputValue, updateValue };
};
