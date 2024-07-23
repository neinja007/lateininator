import CheckboxList from '@/components/CheckboxList';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { WORD_CONSTANTS } from '@/constants';
import { Comparison, ComparisonDegree, Gender } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction } from 'react';

type TestingFormSelectionProps = {
  checkAdverb: boolean;
  setCheckAdverb: Dispatch<SetStateAction<boolean>>;
  comparisons: Comparison[];
  setComparisons: Dispatch<SetStateAction<Comparison[]>>;
  comparisonDegrees: ComparisonDegree[];
  setComparisonDegrees: Dispatch<SetStateAction<ComparisonDegree[]>>;
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
};

const TestingFormSelection = ({
  checkAdverb,
  setCheckAdverb,
  comparisons,
  setComparisons,
  comparisonDegrees,
  setComparisonDegrees,
  genders,
  setGenders
}: TestingFormSelectionProps) => {
  return (
    <>
      <div className='grid grid-cols-3'>
        <p>Wähle aus, was abgefragt werden soll:</p>
        <CheckboxWithLabel
          checked={checkAdverb}
          handleChange={() => setCheckAdverb((prev) => !prev)}
          label={'Adverbien'}
        />
      </div>
      <div className='grid grid-cols-3'>
        <CheckboxList
          options={[...WORD_CONSTANTS.comparison]}
          selected={comparisons}
          setSelected={setComparisons}
          label='Deklination'
          mapper={MAPPER.extended.comparison}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.comparisonDegree]}
          selected={comparisonDegrees}
          setSelected={setComparisonDegrees}
          label='Steigerungsform'
          mapper={MAPPER.extended.comparisonDegree}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.gender]}
          selected={genders}
          setSelected={setGenders}
          label='Geschlecht'
          mapper={MAPPER.extended.gender}
        />
      </div>
    </>
  );
};

export default TestingFormSelection;
