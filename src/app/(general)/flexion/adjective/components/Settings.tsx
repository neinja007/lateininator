import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Input from '@/components/Input';
import Select from '@/components/Select';
import SelectButton from '@/components/SelectButton';
import { WORD_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { Comparison, ComparisonDegree, Gender, Word } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction } from 'react';

type SettingsProps = {
  maxUnit: number;
  setMaxUnit: Dispatch<SetStateAction<number>>;
  validWords: Word[];
  testingType: 'table' | 'individual';
  setTestingType: Dispatch<SetStateAction<'table' | 'individual'>>;
  checkAdverb: boolean;
  setCheckAdverb: Dispatch<SetStateAction<boolean>>;
  comparisons: Comparison[];
  setComparisons: Dispatch<SetStateAction<Comparison[]>>;
  comparisonDegrees: ComparisonDegree[];
  setComparisonDegrees: Dispatch<SetStateAction<ComparisonDegree[]>>;
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
  updateValue: (value: string) => void;
  inputValue: string;
  handleContinue: () => void;
  start: boolean;
};

const Settings = ({
  maxUnit,
  setMaxUnit,
  validWords,
  testingType,
  setTestingType,
  checkAdverb,
  setCheckAdverb,
  comparisons,
  setComparisons,
  comparisonDegrees,
  setComparisonDegrees,
  genders,
  setGenders,
  updateValue,
  inputValue,
  handleContinue,
  start
}: SettingsProps) => {
  return (
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
      <hr className='border-gray-500' />
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
      <hr className='border-gray-500' />
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
      <hr className='border-gray-500' />
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
  );
};

export default Settings;
