import Button from '@/components/Button';
import CheckboxList from '@/components/CheckboxList';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { WORD_CONSTANTS } from '@/constants';
import { Adjective } from '@/types/word';
import { Comparison, ComparisonDegree, Gender } from '@/types/word_constants';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction } from 'react';

type FormSelectionProps = {
  checkAdverb: boolean;
  setCheckAdverb: Dispatch<SetStateAction<boolean>>;
  comparisons: Comparison[];
  setComparisons: Dispatch<SetStateAction<Comparison[]>>;
  comparisonDegrees: ComparisonDegree[];
  setComparisonDegrees: Dispatch<SetStateAction<ComparisonDegree[]>>;
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
  validWords: Adjective[];
};

const FormSelection = ({
  checkAdverb,
  setCheckAdverb,
  comparisons,
  setComparisons,
  comparisonDegrees,
  setComparisonDegrees,
  genders,
  setGenders,
  validWords
}: FormSelectionProps) => {
  const comparisonsNotToCheck = comparisons.filter((comparison) => {
    return !validWords.some((word) => word.comparison === comparison);
  });

  return (
    <>
      <div className='grid grid-cols-3'>
        <p>Wähle aus, was abgefragt werden soll:</p>
        <CheckboxWithLabel
          checked={checkAdverb}
          handleChange={() => setCheckAdverb((prev) => !prev)}
          label={'Adverbien'}
        />
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            color={
              comparisons.length === WORD_CONSTANTS.comparison.length &&
              comparisonDegrees.length === WORD_CONSTANTS.comparisonDegree.length &&
              genders.length === WORD_CONSTANTS.gender.length &&
              checkAdverb
                ? 'blue'
                : 'default'
            }
            onClick={() => {
              setComparisons([...WORD_CONSTANTS.comparison]);
              setComparisonDegrees([...WORD_CONSTANTS.comparisonDegree]);
              setGenders([...WORD_CONSTANTS.gender]);
              setCheckAdverb(true);
            }}
          >
            Alle auswählen
          </Button>
          <Button
            color={
              comparisons.length === 0 && comparisonDegrees.length === 0 && genders.length === 0 && !checkAdverb
                ? 'blue'
                : 'default'
            }
            onClick={() => {
              setComparisons([]);
              setComparisonDegrees([]);
              setGenders([]);
              setCheckAdverb(false);
            }}
          >
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <CheckboxList
          options={[...WORD_CONSTANTS.comparison]}
          disabledOptions={comparisonsNotToCheck}
          selected={comparisons}
          setSelected={setComparisons}
          label='Komparation'
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

export default FormSelection;
