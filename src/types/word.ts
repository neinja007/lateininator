import { WordType } from './appConstants';
import { Endings } from './endings';
import { OptionalComparison, OptionalDeclension, OptionalConjugation, OptionalGender } from './wordConstants';

export type Word = Verb | Noun | Adjective | Other;

type FullyPartial<T> = {
  [P in keyof T]?: T[P] extends object ? FullyPartial<T[P]> : T[P];
};

type Exception = {
  [key: number]: {
    adverb?: {
      [key in 'pos' | 'comp' | 'sup']?: string;
    };
  } & FullyPartial<Endings> & {
      customBases?: {
        [K in 'pos' | 'comp' | 'sup']?: string;
      };
    };
};

export type Base = {
  id: number;
  word: string;
  type: WordType;
  translation: string[];
  info?: string;
  derivative?: number;
  exception?: Exception;
};

export type Adjective = Base & {
  type: 'adjective';
  comparison: OptionalComparison;
  femininum: string;
  neutrum: string;
};

export type Noun = Base & {
  type: 'noun';
  pluralOnly?: boolean;
  declension: OptionalDeclension;
  genitive: string;
  gender: OptionalGender;
};

export type Verb = Base & {
  type: 'verb';
  conjugation: OptionalConjugation;
  present: string;
  perfect: string;
  participle: string;
};

export type Other = Base & {
  type: 'other' | 'adverb' | 'pronoun' | 'irregularVerb';
};
