import { List } from './types';

const generateSequentialNumbers = (start: number, end: number): number[] => {
	return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

export const lists: Array<List> = [
	{
		name: 'Lektion 1',
		words: generateSequentialNumbers(1, 33)
	},
	{
		name: 'Lektion 2',
		words: generateSequentialNumbers(34, 64)
	},
	{
		name: 'Lektion 3',
		words: generateSequentialNumbers(65, 91)
	},
	{
		name: 'Lektion 4',
		words: generateSequentialNumbers(92, 120)
	},
	{
		name: 'Lektion 5',
		words: generateSequentialNumbers(121, 161)
	},
	{
		name: 'Lektion 6',
		words: generateSequentialNumbers(162, 186)
	},
	{
		name: 'Lektion 7',
		words: generateSequentialNumbers(187, 215)
	},
	{
		name: 'Lektion 8',
		words: generateSequentialNumbers(216, 237)
	},
	{
		name: 'Lektion 9',
		words: generateSequentialNumbers(238, 265)
	}
];
