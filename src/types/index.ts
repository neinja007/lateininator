import { WORD_CONSTANTS, APP_CONSTANTS } from '../constants';

export type WordCase = (typeof WORD_CONSTANTS.wordCase)[number];
export type Person = (typeof WORD_CONSTANTS.person)[number];
export type Numerus = (typeof WORD_CONSTANTS.numerus)[number];
export type Modus = (typeof WORD_CONSTANTS.modus)[number];
export type Voice = (typeof WORD_CONSTANTS.voice)[number];
export type Tense = (typeof WORD_CONSTANTS.tense)[number];
export type Declension = (typeof WORD_CONSTANTS.declension)[number];
export type Gender = (typeof WORD_CONSTANTS.gender)[number];
export type Conjugation = (typeof WORD_CONSTANTS.conjugation)[number];
export type Comparison = (typeof WORD_CONSTANTS.comparison)[number];
export type ComparisonDegree = (typeof WORD_CONSTANTS.comparisonDegree)[number];

export type WordType = (typeof APP_CONSTANTS.wordTypes)[number];
export type MainWordType = (typeof APP_CONSTANTS.mainWordTypes)[number];
export type WordProperty = (typeof APP_CONSTANTS.allWordProperties)[number];
export type OtherProperty = (typeof APP_CONSTANTS.otherProperties)[number];
export type WordPropertiesUsingSelectInput = (typeof APP_CONSTANTS.wordPropertiesUsingSelectInput)[number];

export type Word = Verb | Noun | Adjective | Other;

export type Base = {
  id: number;
  word: string;
  type: WordType;
  translation?: string[];
  info?: string;
  derivative?: number;
  exception?: number;
};

export type Noun = Base & {
  type: 'noun';
  pluralOnly?: boolean;
  declension: Declension | '-';
  genitive: string | '-';
  gender: Gender | '-';
};

export type Verb = Base & {
  type: 'verb';
  conjugation: Conjugation | '-';
  present: string | '-';
  perfect: string | '-';
  participle: string | '-';
};

export type Adjective = Base & {
  type: 'adjective';
  comparison: Comparison | '-';
  femininum: string | '-';
  neutrum: string | '-';
};

export type Other = Base & {
  type: 'other' | 'adverb' | 'pronoun' | 'irregularVerb';
};

export type List = { id: number; name: string; words: number[] };

export type ConditionalTense<M> = M extends 'ind' ? Tense : Exclude<Tense, 'fut1'>;
export type ConditionalPerson<T, V, M> = M extends 'ind'
  ? T extends 'pres'
    ? V extends 'act'
      ? Person
      : Exclude<Person, '4'>
    : Exclude<Person, '4'>
  : Exclude<Person, '4'>;

export type Endings = {
  verb: {
    [C in Conjugation]: {
      [M in Modus]: {
        [V in Voice]: {
          [T in ConditionalTense<M>]: {
            [N in Numerus]: {
              [P in ConditionalPerson<T, V, M>]: string;
            };
          };
        };
      };
    };
  };
  noun: {
    [D in Declension]: {
      [G in Gender]: {
        [N in Numerus]: {
          [C in Exclude<WordCase, '6'>]: string;
        };
      };
    };
  };
  adjective: {
    [C in Comparison]: {
      [G in Gender]: {
        [D in ComparisonDegree]: {
          [N in Numerus]: {
            [C in Exclude<WordCase, '6'>]: string;
          };
        };
      };
    };
  };
  adverb: {
    [D in ComparisonDegree]: {
      [T in Comparison | '_ns']: string;
    };
  };
};

export type MapperKeys = {
  type: Record<WordType, string>;
  declension: Record<Declension, string>;
  comparison: Record<Comparison, string>;
  wordCase: Record<WordCase, string>;
  gender: Record<Gender, string>;
  numerus: Record<Numerus, string>;
  conjugation: Record<Conjugation, string>;
  tense: Record<Tense, string>;
  person: Record<Person, string>;
  modus: Record<Modus, string>;
  voice: Record<Voice, string>;
  property: Record<WordProperty | OtherProperty, string>;
  comparisonDegree: Record<ComparisonDegree, string>;
};

export type MapperType = { short: MapperKeys; extended: MapperKeys };

export type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'default';
export type Stage = 'settings' | 'test' | 'review' | 'results';
