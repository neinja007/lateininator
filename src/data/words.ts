export type Word = Base & (Verb | Noun | Adjective | Other);

export type Words = Array<Word>;

export type Base = {
	id: number;
	word: string;
	type: 'noun' | 'verb' | 'adjective' | 'other';
	translation?: Array<string>;
};

export type Noun = {
	type: 'noun';
	declension: 'a' | 'o' | 'm' | 'i' | 'k' | 'e' | 'u';
	genitive: string;
	gender: 'm' | 'f' | 'n';
};

export type Verb = {
	type: 'verb';
	conjugation: 'a' | 'e' | 'i' | 'k' | 'm';
	forms: {
		present: string;
		perfect: string;
		participle: string;
	};
};

export type Adjective = {
	type: 'adjective';
	declension: 'a_o' | 'kon';
	forms: {
		masculinum: string;
		femininum: string;
		neutrum: string;
	};
};

export type Other = {
	type: 'other';
};

export const words: Words = [
	{ id: 1, type: 'noun', declension: 'a', gender: 'f', genitive: 'scholae', word: 'schola', translation: ['Schule'] }
];
