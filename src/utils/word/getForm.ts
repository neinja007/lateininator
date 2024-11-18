import { endings } from '@/constants/endings';
import { getBase } from './getBase';
import { Word } from '@/types/word';
import { Modus, Voice, Tense, Numerus, Person, WordCase, ComparisonDegree, Gender } from '@/types/wordConstants';
import { isNoun } from '../typeguards/isNoun';
import { isVerb } from '../typeguards/isVerb';
import { isAdjective } from '../typeguards/isAdjective';

export const getForm = (
  word: Word,
  info:
    | {
        imperative?: boolean;
        modus: Modus;
        voice: Voice;
        tense: Tense;
        numerus: Numerus;
        person: Person;
      }
    | {
        numerus: Numerus;
        wordCase: WordCase | '6';
      }
    | {
        comparisonDegree: ComparisonDegree;
        gender: Gender;
        adverb?: boolean;
        numerus: Numerus;
        wordCase: WordCase | '6';
      }
): { form: string; exception: boolean } => {
  let ending: string | undefined = undefined;
  let customEnding: string | undefined = undefined;

  if (isNoun(word)) {
    if (word.noun.declension === 'NONE' || word.noun.gender === 'NONE')
      throw new Error('Error: Empty word properties were passed to getForm()');
    else if (word.noun.pluralOnly && info.numerus === 'sin') return { form: '-', exception: false };
    else if ('numerus' in info && 'wordCase' in info) {
      customEnding = word.exception[info.numerus]?.[info.wordCase];
      if (customEnding) return { form: customEnding, exception: true };

      if (info.wordCase === '6') {
        ending = endings.noun[word.noun.declension][word.noun.gender][info.numerus][1];

        if (word.noun.declension === 'O' && word.noun.gender === 'M' && info.numerus === 'sin') {
          if (word.name.endsWith('ius')) ending = 'i';
          else if (word.name.endsWith('us')) ending = 'e';
        }
      } else {
        ending = endings.noun[word.noun.declension][word.noun.gender][info.numerus][info.wordCase];
      }
    } else {
      throw new Error('Error: Invalid word properties were passed to getForm()');
    }
  } else if (isVerb(word)) {
    if (word.verb.conjugation === 'NONE') throw new Error('Error: Empty word properties were passed to getForm()');
    else if ('modus' in info && 'voice' in info && 'tense' in info && 'numerus' in info && 'person' in info) {
      if (
        (info.person === '4' && (info.modus !== 'ind' || info.tense !== 'pres' || info.voice !== 'act')) ||
        (info.modus === 'kon' && info.tense === 'fut1')
      ) {
        throw new Error('Error: Invalid word properties were passed to getForm()');
      } else {
        customEnding = word.exception[info.modus]?.[info.voice]?.[info.tense]?.[info.numerus]?.[info.person];
        if (customEnding) return { form: customEnding, exception: true };

        ending =
          endings.verb[word.verb.conjugation][info.modus][info.voice][info.tense as Exclude<Tense, 'fut1'>][
            info.numerus
          ][info.person as Exclude<Person, '4'>];
      }
    }
  } else if (isAdjective(word)) {
    if (word.adjective.comparison === 'NONE') throw new Error('Error: Empty word properties were passed to getForm()');
    else if ('comparisonDegree' in info && 'numerus' in info && 'wordCase' in info) {
      if (info.adverb) {
        customEnding = word.exception.adverb?.[info.comparisonDegree];
        if (customEnding) return { form: customEnding, exception: true };

        ending = endings.adverb[info.comparisonDegree][word.name.endsWith('ns') ? '_ns' : word.adjective.comparison];
      } else {
        customEnding = word.exception[info.comparisonDegree]?.[info.gender]?.[info.numerus]?.[info.wordCase];
        if (customEnding) return { form: customEnding, exception: true };

        if (info.wordCase === '6') {
          ending = endings.adjective[word.adjective.comparison][info.gender][info.comparisonDegree][info.numerus][1];

          if (word.adjective.comparison === 'A_O' && info.gender === 'M') {
            if (ending.endsWith('us')) ending = ending.substring(0, ending.length - 2) + 'e';
            else if (ending.endsWith('ius')) ending = ending.substring(0, ending.length - 3) + 'i';
          }
        } else {
          ending =
            endings.adjective[word.adjective.comparison][info.gender][info.comparisonDegree][info.numerus][
              info.wordCase
            ];
        }
      }
    } else {
      throw new Error('Error: Invalid word properties were passed to getForm()');
    }
  }

  if (ending === undefined)
    throw new Error('Error: Ending from getForm() is undefined: ' + JSON.stringify(word) + JSON.stringify(info));
  if (ending === '-') {
    return { form: word.name, exception: false };
  }

  let baseType: 'word' | 'present' | 'perfect' | 'participle' = 'word';
  let superlative = false;

  if (isVerb(word) && 'tense' in info) {
    if (info.tense === 'pres') {
      baseType = 'present';
    } else if (info.voice === 'pas' && (info.tense === 'perf' || info.tense === 'plus')) {
      baseType = 'participle';
    } else if (info.tense === 'perf' || info.tense === 'plus') {
      baseType = 'perfect';
    }
  } else if (isAdjective(word) && 'comparisonDegree' in info) {
    if (info.comparisonDegree === 'sup') {
      superlative = true;
    }
  }

  const base = getBase(word, {
    baseType,
    comparisonDegree: isAdjective(word) && 'comparisonDegree' in info ? info.comparisonDegree : undefined
  });
  if (base === '') return { form: '-', exception: false };
  else return { form: base + ending, exception: false };
};
