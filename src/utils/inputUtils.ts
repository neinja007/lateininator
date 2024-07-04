export const compareValues = (input: string, correctInput: string | Array<string>, translation?: boolean): boolean => {
	if (translation && typeof correctInput === 'object') {
		return input.split(',').some((translation) => {
			return correctInput.some((correctInput) => {
				return compareValues(translation, correctInput);
			});
		});
	} else if (typeof correctInput === 'string') {
		return input.trim().toLowerCase() === correctInput.trim().toLowerCase();
	} else {
		throw new Error('Error: compareValues() called with incorrect arguments.');
	}
};

export const getInputWithCorrectValue = (
	input: string,
	correctValue: string | Array<string>,
	translation?: true
): string => {
	if (translation && typeof correctValue === 'object') {
		correctValue = correctValue.map((value) => capitalizeFirstLetter(value));
	}
	const formattedValue = typeof correctValue === 'object' ? correctValue.join(', ') : correctValue;
	if (compareValues(input, correctValue, translation) && !translation && typeof correctValue === 'string') {
		return correctValue;
	} else if (input.trim() === '') {
		return `(${formattedValue})`;
	} else {
		return `${input} (${formattedValue})`;
	}
};

export const capitalizeFirstLetter = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
