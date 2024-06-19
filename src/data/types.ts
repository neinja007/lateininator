/* eslint-disable no-unused-vars */

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

export type Conjugation = 'a' | 'e' | 'i' | 'm' | 'k';
export type Modus = 'ind' | 'kon';
export type Voice = 'act' | 'pas';
export type Tense = 'pres' | 'impe' | 'fut1' | 'perf' | 'plus';
export type Numerus = 'sin' | 'plu';
export type Person = 1 | 2 | 3;
export type Case = 1 | 2 | 3 | 4 | 5;
export type Declension = 'a' | 'o' | 'k' | 'i' | 'm' | 'e' | 'u';
export type Gender = 'm' | 'f' | 'n';

type MakeFut1Optional<T> = {
	[K in keyof T as K extends 'fut1' ? never : K]: T[K];
} & { fut1?: T extends { fut1: infer R } ? R : never };

export type Endings = {
	verb: {
		[C in Conjugation]: {
			[M in Modus]: {
				[V in Voice]: MakeFut1Optional<{
					[T in Tense]: {
						[N in Numerus]: {
							[P in Person]: string;
						};
					};
				}>;
			};
		};
	};
	noun: {
		[D in Declension]: {
			[G in Gender]: {
				[N in Numerus]: {
					[C in Case]: string;
				};
			};
		};
	};
};
