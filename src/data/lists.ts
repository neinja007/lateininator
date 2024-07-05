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
	},
	{
		name: 'Lektion 10',
		words: generateSequentialNumbers(266, 289)
	},
	{
		name: 'Lektion 11',
		words: generateSequentialNumbers(290, 319)
	},
	{
		name: 'Lektion 12',
		words: generateSequentialNumbers(320, 346)
	},
	{
		name: 'Lektion 13',
		words: generateSequentialNumbers(347, 367)
	},
	{
		name: 'Lektion 14',
		words: generateSequentialNumbers(368, 398)
	},
	{
		name: 'Lektion 15',
		words: generateSequentialNumbers(399, 431)
	},
	{
		name: 'Lektion 16',
		words: generateSequentialNumbers(432, 458)
	},
	{
		name: 'Lektion 17',
		words: generateSequentialNumbers(459, 490)
	},
	{
		name: 'Lektion 18',
		words: generateSequentialNumbers(491, 521)
	},
	{
		name: 'Lektion 19',
		words: generateSequentialNumbers(522, 547)
	}
];
