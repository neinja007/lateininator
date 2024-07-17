'use client';

import { Adjective, WordCase, Comparison, ComparisonDegree, Gender, Numerus, Word } from '@/types';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { Fragment, useEffect, useState } from 'react';
import { getForm } from '@/utils/wordUtils';
import { WORD_CONSTANTS } from '@/constants';
import { isAdjective } from '@/utils/typeguards';
import { MAPPER } from '@/utils/mapper';
import ActionBar from '@/components/ActionBar';
import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Heading from '@/components/Heading';
import Select from '@/components/Select';
import SelectButton from '@/components/SelectButton';
import WordDisplay from '@/components/WordDisplay';
import Input from '@/components/Input';
import { useNumberInput } from '@/hooks/useNumberInput';
import { getRandomItem } from '@/utils/propertyUtils';
import { useGame } from '@/hooks/useGame';
import table from '@/styles/table.module.css';
import TrainerInput from '@/components/TrainerInput';
import Results from '@/components/Results';

const initialTableInputValues: Record<Gender, Record<Numerus, Record<Exclude<WordCase, '6'>, string>>> = {
  m: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    }
  },
  f: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    }
  },
  n: {
    sin: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    },
    plu: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
    }
  }
};

const Page = () => {
  const [testingType, setTestingType] = useState<'table' | 'individual'>('table');
  const { activeWord, maxWords, remainingWords, updateWords, stage, handleContinue } = useGame(
    true,
    testingType === 'individual'
      ? () => setIndividualInputValue('')
      : () => setTableInputValues(initialTableInputValues)
  );

  const [maxUnit, setMaxUnit] = useState(lists.length);
  const [validWords, setValidWords] = useState<Array<Adjective>>([]);

  const { inputValue, updateValue, value } = useNumberInput(testingType === 'individual' ? 100 : 5);

  const [comparisons, setComparisons] = useState<Array<Comparison>>([...WORD_CONSTANTS.comparison]);
  const [comparisonDegrees, setComparisonDegrees] = useState<Array<ComparisonDegree>>([
    ...WORD_CONSTANTS.comparisonDegree
  ]);
  const [genders, setGenders] = useState<Array<Gender>>([...WORD_CONSTANTS.gender]);
  const [checkAdverb, setCheckAdverb] = useState(true);

  const [individualInputValue, setIndividualInputValue] = useState<string>('');
  const [individualInputForm, setIndividualInputForm] = useState<{
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
    gender: Gender;
    numerus: Numerus;
    wordCase: WordCase;
  }>();

  const [tableInputForm, setTableInputForm] = useState<{
    comparison: Comparison;
    comparisonDegree: ComparisonDegree;
  }>();
  const [tableInputValues, setTableInputValues] = useState<typeof initialTableInputValues>(initialTableInputValues);

  useEffect(() => {
    if (stage === 'settings') {
      const ids = lists
        .filter((list) => list.id < maxUnit)
        .reduce((acc: any, list) => {
          return acc.concat(list.words);
        }, []);

      const selectedWords: Adjective[] = words.filter(
        (word: Word) => isAdjective(word) && ids.includes(word.id) && word.comparison !== '-'
      ) as Adjective[];
      setValidWords(selectedWords);

      const possibleWords = selectedWords
        .filter((word) => 'comparison' in word && word.comparison !== '-' && comparisons.includes(word.comparison))
        .slice(0, value);

      updateWords(possibleWords);
    }
  }, [comparisons, maxUnit, stage, updateWords, value]);

  useEffect(() => {
    if (!activeWord || !isAdjective(activeWord)) return;
    if (testingType === 'individual') {
      activeWord &&
        isAdjective(activeWord) &&
        setIndividualInputForm({
          comparison: activeWord.comparison as Comparison,
          comparisonDegree: getRandomItem(comparisonDegrees),
          numerus: getRandomItem(['sin', 'plu']),
          wordCase: getRandomItem(['1', '2', '3', '4', '5']) as WordCase,
          gender: getRandomItem(genders)
        });
    } else {
      setTableInputForm({
        comparison: activeWord.comparison as Comparison,
        comparisonDegree: getRandomItem(comparisonDegrees)
      });
    }
  }, [activeWord, comparisonDegrees, genders, testingType]);

  const start = remainingWords > 0;

  return (
    <div className='space-y-5'>
      <Heading>Flexionstrainer: Adjektive</Heading>
      {stage === 'settings' && (
        <>
          <p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
          <div className='flex'>
            <Select
              label='Lektion'
              value={maxUnit}
              handleChange={setMaxUnit}
              options={lists.reduce((acc: any, list) => {
                acc[list.id] = list.name;
                return acc;
              }, {})}
            />
            <span className='mb-1.5 ml-5 mt-auto'>
              Du hast <b className='text-blue-500'>{validWords.length} Adjektive</b> ausgewählt.
            </span>
          </div>
          <hr />
          <p>Wähle aus, wie du abgefragt werden möchtest:</p>
          <div className='flex space-x-5'>
            <SelectButton
              className='w-1/2 font-medium'
              active={testingType === 'table'}
              handleClick={() => setTestingType('table')}
              label='Formen mit Tabellen abfragen'
            />
            <SelectButton
              className='w-1/2 font-medium'
              active={testingType === 'individual'}
              handleClick={() => setTestingType('individual')}
              label='Formen einzeln abfragen'
            />
          </div>
          <hr />
          <div className='grid grid-cols-3'>
            <p>Wähle aus, was abgefragt werden soll:</p>
            <CheckboxWithLabel
              checked={checkAdverb}
              handleChange={() => setCheckAdverb((prev) => !prev)}
              label={'Adverbien'}
            />
          </div>
          <div className='grid grid-cols-3'>
            <div>
              Deklination:
              {WORD_CONSTANTS.comparison.map((comparison) => (
                <CheckboxWithLabel
                  key={comparison}
                  checked={comparisons.includes(comparison)}
                  handleChange={(checked) =>
                    setComparisons((prev) => (checked ? [...prev, comparison] : prev.filter((p) => p !== comparison)))
                  }
                  label={MAPPER.extended.comparison[comparison]}
                />
              ))}
            </div>
            <div>
              Steigerungsform:
              {WORD_CONSTANTS.comparisonDegree.map((comparisonDegree) => (
                <CheckboxWithLabel
                  key={comparisonDegree}
                  checked={comparisonDegrees.includes(comparisonDegree)}
                  handleChange={(checked) =>
                    setComparisonDegrees((prev) =>
                      checked ? [...prev, comparisonDegree] : prev.filter((p) => p !== comparisonDegree)
                    )
                  }
                  label={MAPPER.extended.comparisonDegree[comparisonDegree]}
                />
              ))}
            </div>
            <div>
              Geschlecht:
              {WORD_CONSTANTS.gender.map((gender) => (
                <CheckboxWithLabel
                  key={gender}
                  checked={genders.includes(gender)}
                  handleChange={(checked) =>
                    setGenders((prev) => (checked ? [...prev, gender] : prev.filter((p) => p !== gender)))
                  }
                  label={MAPPER.extended.gender[gender]}
                />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <Input
              label={`Anzahl der abgefragten ${testingType === 'individual' ? 'Formen' : 'Tabellen'} (max. ${
                testingType === 'individual' ? '100' : '5'
              })`}
              onChange={(value) => updateValue(value)}
              value={inputValue}
              className={'w-full text-center'}
            />
          </div>
          <Button onClick={() => handleContinue()} className='w-full' disabled={!start}>
            <span>{!start ? 'Keine Adjektive verfügbar' : 'Start'}</span>
          </Button>
        </>
      )}
      {(stage === 'test' || stage === 'review') && activeWord && (
        <>
          <WordDisplay word={activeWord} />
          <hr />
          <div>
            {individualInputForm && testingType === 'individual' ? (
              <TrainerInput
                label={`
                  ${MAPPER.extended.gender[individualInputForm.gender]};
                  ${MAPPER.extended.comparisonDegree[individualInputForm.comparisonDegree]}
                  ${MAPPER.extended.numerus[individualInputForm.numerus]}
                  ${MAPPER.extended.wordCase[individualInputForm.wordCase]}
                  `}
                handleChange={setIndividualInputValue}
                value={individualInputValue}
                correctValue={stage === 'review' ? getForm(activeWord, individualInputForm) : undefined}
              />
            ) : (
              tableInputForm &&
              testingType === 'table' && (
                <Fragment>
                  <p>{MAPPER.extended.comparisonDegree[tableInputForm.comparisonDegree]}</p>
                  <table className={table.table}>
                    <thead className={table.thead}>
                      <tr>
                        <th />
                        {WORD_CONSTANTS.gender.map((gender, i) => (
                          <th key={i} className={table.th}>
                            {MAPPER.extended.gender[gender]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {WORD_CONSTANTS.numerus.map((numerus) =>
                        WORD_CONSTANTS.wordCase.map(
                          (wordCase, i) =>
                            wordCase !== '6' && (
                              <tr key={i} className='border-t'>
                                <th className={table.th}>
                                  {MAPPER.extended.wordCase[wordCase]} {MAPPER.extended.numerus[numerus]}
                                </th>
                                {WORD_CONSTANTS.gender.map((gender, i) => (
                                  <td key={i} className='border p-0'>
                                    <TrainerInput
                                      customStyle='w-full m-0 h-8 px-1 bg-inherit focus:outline-none'
                                      value={tableInputValues[gender][numerus][wordCase]}
                                      correctValue={
                                        stage === 'review'
                                          ? getForm(activeWord, {
                                              gender,
                                              numerus,
                                              wordCase,
                                              comparisonDegree: tableInputForm.comparisonDegree
                                            })
                                          : undefined
                                      }
                                      handleChange={(value) =>
                                        setTableInputValues((prev) => ({
                                          ...prev,
                                          [gender]: {
                                            ...prev[gender],
                                            [numerus]: {
                                              ...prev[gender][numerus],
                                              [wordCase]: value
                                            }
                                          }
                                        }))
                                      }
                                    />
                                  </td>
                                ))}
                              </tr>
                            )
                        )
                      )}
                    </tbody>
                  </table>
                  <br />
                </Fragment>
              )
            )}
          </div>
          <hr />
          <ActionBar
            handleContinue={handleContinue}
            progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
          />
        </>
      )}
    </div>
  );
};

export default Page;
