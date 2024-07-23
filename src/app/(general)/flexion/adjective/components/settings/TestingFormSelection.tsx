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
    </>
  );
};

export default TestingFormSelection;
