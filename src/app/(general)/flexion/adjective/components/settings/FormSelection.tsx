import CheckboxList from '@/components/CheckboxList';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { Adjective } from '@/types/word';
import { Comparison, ComparisonDegree, Gender } from '@/types/wordConstants';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction } from 'react';
import FormSelectionWrapper from '../../../components/FormSelectionWrapper';

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
    <FormSelectionWrapper
      titleOption={{
        checked: checkAdverb,
        handleChange: () => setCheckAdverb((prev) => !prev),
        disabled: false,
        label: 'Adverbien'
      }}
      selectAllActive={
        comparisons.length === WORD_CONSTANTS.comparison.length &&
        comparisonDegrees.length === WORD_CONSTANTS.comparisonDegree.length &&
        genders.length === WORD_CONSTANTS.gender.length &&
        checkAdverb
      }
      selectAll={() => {
        setComparisons([...WORD_CONSTANTS.comparison]);
        setComparisonDegrees([...WORD_CONSTANTS.comparisonDegree]);
        setGenders([...WORD_CONSTANTS.gender]);
        setCheckAdverb(true);
      }}
      selectNoneActive={
        comparisons.length === 0 && comparisonDegrees.length === 0 && genders.length === 0 && !checkAdverb
      }
      selectNone={() => {
        setComparisons([]);
        setComparisonDegrees([]);
        setGenders([]);
        setCheckAdverb(false);
      }}
      columns={3}
    >
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
    </FormSelectionWrapper>
  );
};

export default FormSelection;
