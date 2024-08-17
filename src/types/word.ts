import { WordType } from './app_constants';
import { Comparison, Declension, Gender, Conjugation } from './word_constants';

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
  comparison: Comparison | '-';
  femininum: string | '-';
  neutrum: string | '-';
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

export type Other = Base & {
  type: 'other' | 'adverb' | 'pronoun' | 'irregularVerb';
};
