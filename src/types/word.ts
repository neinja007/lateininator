import { WordType } from './app_constants';
import { OptionalComparison, OptionalDeclension, OptionalConjugation, OptionalGender } from './word_constants';

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
