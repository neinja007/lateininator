import { Gender, Prisma } from '@prisma/client';
import { ComparisonDegree, Modus, Numerus, Person, Tense, Voice, WordCase } from './wordConstants';

type FullyPartial<T> = {
  [P in keyof T]?: T[P] extends object ? FullyPartial<T[P]> : T[P];
};

type NounException = FullyPartial<{
  [N in Numerus]: {
    [C in WordCase]: string;
  };
}>;

type VerbException = FullyPartial<{
  [M in Modus]: {
    [V in Voice]: {
      [T in Tense]: {
        [N in Numerus]: {
          [P in Person]: string;
        };
      };
    };
  };
}>;

type AdjectiveException = FullyPartial<
  {
    [G in Exclude<Gender, 'NONE'>]: {
      [D in ComparisonDegree]: {
        [N in Numerus]: {
          [C in WordCase]: string;
        };
      };
    };
  } & {
    adverb: {
      [D in ComparisonDegree]?: string;
    };
  }
>;

const wordWithList = Prisma.validator<Prisma.WordDefaultArgs>()({
  include: { lists: true }
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

type NounType = GetWordType<typeof wordWithNoun>;
type VerbType = GetWordType<typeof wordWithVerb>;
type AdjectiveType = GetWordType<typeof wordWithAdjective>;

export type Noun = NounType & { noun: NonNullable<NounType['noun']> };
export type Verb = VerbType & { verb: NonNullable<VerbType['verb']> };
export type Adjective = AdjectiveType & { adjective: NonNullable<AdjectiveType['adjective']> };
export type Word = GetWordType<{}>;
