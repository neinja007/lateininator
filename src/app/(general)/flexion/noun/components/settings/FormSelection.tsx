import CheckboxList from '@/components/CheckboxList';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { Noun } from '@/types/word';
import { Gender, Declension } from '@/types/wordConstants';
import { MAPPER } from '@/utils/other/mapper';
import { Dispatch, SetStateAction } from 'react';
import FormSelectionWrapper from '../../../components/FormSelectionWrapper';

type FormSelectionProps = {
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
  declensions: Declension[];
  setDeclensions: Dispatch<SetStateAction<Declension[]>>;
  validWords: Noun[];
};

const FormSelection = ({ genders, setGenders, declensions, setDeclensions, validWords }: FormSelectionProps) => {
  const declensionsNotToCheck = declensions.filter(
    (declension) => !validWords.some((word) => word.noun.declension === declension)
  );

  const gendersNotToCheck = genders.filter((gender) => !validWords.some((word) => word.noun.gender === gender));

  return (
    <FormSelectionWrapper
      selectAll={() => {
        setDeclensions([...WORD_CONSTANTS.declension]);
        setGenders([...WORD_CONSTANTS.gender]);
      }}
      selectAllActive={
        declensions.length === WORD_CONSTANTS.declension.length && genders.length === WORD_CONSTANTS.gender.length
      }
      selectNone={() => {
        setDeclensions([]);
        setGenders([]);
      }}
      selectNoneActive={declensions.length === 0 && genders.length === 0}
      columns={2}
    >
      <CheckboxList
        options={[...WORD_CONSTANTS.declension]}
        disabledOptions={declensionsNotToCheck}
        selected={declensions}
        setSelected={setDeclensions}
        label={MAPPER.extended.property.plural.declension}
        mapper={MAPPER.extended.declension}
      />
      <CheckboxList
        options={[...WORD_CONSTANTS.gender]}
        disabledOptions={gendersNotToCheck}
        selected={genders}
        setSelected={setGenders}
        label={MAPPER.extended.property.plural.gender}
        mapper={MAPPER.extended.gender}
      />
    </FormSelectionWrapper>
  );
};

export default FormSelection;
