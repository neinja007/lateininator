import {
  Tense,
  Person,
  Conjugation,
  Modus,
  Voice,
  Numerus,
  Declension,
  Gender,
  WordCase,
  Comparison,
  ComparisonDegree
} from './word_constants';

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
