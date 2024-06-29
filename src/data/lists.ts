import { List } from './types';

function generateSequentialNumbers(start: number, end: number): number[] {
	return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

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
	}
];
