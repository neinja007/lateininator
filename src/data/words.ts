import { Words } from '@/data/types';

export const words: Words = [
	{
		id: 1,
		type: 'noun',
		declension: 'a',
		gender: 'f',
		genitive: 'scholae',
		word: 'schola',
		translation: ['Schule', 'Uni']
	},
	{
		id: 2,
		type: 'verb',
		conjugation: 'e',
		word: 'habere',
		translation: ['haben'],
		forms: { present: 'habeo', perfect: 'habui', participle: 'habitum' }
	}
];
