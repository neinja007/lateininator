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

export type Conjugations = 'a' | 'e' | 'i' | 'm' | 'k';
export type Modi = 'ind' | 'kon';
export type Voices = 'act' | 'pas';
export type Tenses = 'pres' | 'impe' | 'fut1' | 'perf' | 'plus';
export type TensesForModus<M extends Modi> = M extends 'kon' ? Exclude<Tenses, 'fut1'> : Tenses;
export type Numeri = 'sin' | 'plu';
export type Persons = 1 | 2 | 3;
export type Cases = 1 | 2 | 3 | 4 | 5;
export type Declension = 'a' | 'o' | 'k' | 'i' | 'm' | 'e' | 'u';
export type Genders = 'm' | 'f' | 'n';

export type Endings = {
	verb: {
		[C in Conjugations]: {
			[M in Modi]: {
				[V in Voices]: {
					[T in TensesForModus<M>]: {
						[N in Numeri]: {
							[P in Persons]: string;
						};
					};
				};
			};
		};
	};
	noun: {
		[D in Declension]: {
			[G in Genders]: {
				[N in Numeri]: {
					[C in Cases]: string;
				};
			};
		};
	};
};
