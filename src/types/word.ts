import { Gender, Prisma } from '@prisma/client';
import { ConditionalPerson, ConditionalTense } from './endings';
import { ComparisonDegree, Modus, Numerus, Voice, WordCase } from './wordConstants';

type NounException = {
  [N in Numerus]: {
    [C in Exclude<WordCase, '6'>]: string;
  };
};
type VerbException = {
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
type AdjectiveException = {
  [G in Exclude<Gender, 'NONE'>]: {
    [D in ComparisonDegree]: {
      [N in Numerus]: {
        [C in Exclude<WordCase, '6'>]: string;
      };
    };
  };
} & {
  adverb: {
    [D in ComparisonDegree]?: string;
  };
};

const wordWithList = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { list: true }
});

const wordWithDerivative = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { derivative: true }
});

const wordWithNoun = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { noun: true, derivative: true }
});

const wordWithVerb = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { verb: true, derivative: true }
});

const wordWithAdjective = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { adjective: true, derivative: true }
});

type GetWordType<Type extends Prisma.WordDefaultArgs> = Omit<
  Prisma.WordGetPayload<Type & typeof wordWithList & typeof wordWithDerivative>,
  'nounId' | 'verbId' | 'adjectiveId' | 'derivativeId' | 'listId' | 'exception'
> & {
  exception: Type extends typeof wordWithNoun
    ? NounException
    : Type extends typeof wordWithVerb
      ? VerbException
      : Type extends typeof wordWithAdjective
        ? AdjectiveException
        : {};
};

export type Noun = GetWordType<typeof wordWithNoun>;
export type Verb = GetWordType<typeof wordWithVerb>;
export type Adjective = GetWordType<typeof wordWithAdjective>;
export type Word = GetWordType<{}>;
