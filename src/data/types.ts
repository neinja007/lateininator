export type Word = Base & (Verb | Noun | Adjective | Other | IrregularVerb);
export type WordInputKey =
	| 'declension'
	| 'comparison'
	| 'genitive'
	| 'gender'
	| 'conjugation'
	| 'present'
	| 'participle'
	| 'perfect'
	| 'femininum'
	| 'neutrum';
export type Words = Array<Word>;
export type Type = 'noun' | 'verb' | 'adjective' | 'other' | 'irregular_verb' | 'pronoun' | 'adverb';
export type List = { name: string; words: Array<number> };

export type Base = {
	id: number;
	word: string;
	type: Type;
	translation?: Array<string>;
	info?: string;
	derivative?: number;
};

export type Noun = {
	type: 'noun';
	declension: Declension;
	genitive: string;
	gender: Gender;
};

export type Verb = {
	type: 'verb';
	conjugation: Conjugation;
	present: string;
	perfect: string;
	participle: string;
};

export type Adjective = {
	type: 'adjective';
	comparison: Comparison;
	femininum: string;
	neutrum: string;
};

export type Other = {
	type: 'other' | 'adverb' | 'pronoun';
};

export type IrregularVerb = {
	type: 'irregular_verb';
	present: string;
	perfect: string;
	participle: string;
};

export type Conjugation = 'a' | 'e' | 'i' | 'm' | 'k';
export type Modus = 'ind' | 'kon';
export type Voice = 'act' | 'pas';
export type Tense = 'pres' | 'impe' | 'fut1' | 'perf' | 'plus';
export type Numerus = 'sin' | 'plu';
export type Person = '1' | '2' | '3';
export type Case = '1' | '2' | '3' | '4' | '5' | '6';
export type Declension = 'a' | 'o' | 'k' | 'i' | 'm' | 'e' | 'u';
export type Comparison = 'a_o' | 'e_u';
export type Gender = 'm' | 'f' | 'n';
export type ComparisonDegree = 'pos' | 'comp' | 'sup';

export type ConditionalTense<T, M> = M extends 'kon' ? Exclude<T, 'fut1'> : T;

// export type Endings = {
// 	verb: {
// 		[C in Conjugation]: {
// 			[M in Modus]: {
// 				[V in Voice]: {
// 					[T in ConditionalTense<Tense, M>]: {
// 						[N in Numerus]: {
// 							[P in Person]: string;
// 						};
// 					};
// 				};
// 			};
// 		};
// 	};
// 	noun: {
// 		[D in Declension]: {
// 			[G in Gender]: {
// 				[N in Numerus]: {
// 					[C in Case]: string;
// 				};
// 			};
// 		};
// 	};
// 	adjective: {
// 		[C in Comparison]: {
// 			[G in Gender]: {
// 				[D in ComparisonDegree]: {
// 					[N in Numerus]: {
// 						[C in Case]: string;
// 					};
// 				};
// 			};
// 		};
// 	};
// 	adverb: {
// 		pos: {
// 			a_o: 'e';
// 			e_u: 'iter';
// 			_ns: 'nter';
// 		};
// 		comp: '-ius';
// 		sup: '-e';
// 	};
// };
