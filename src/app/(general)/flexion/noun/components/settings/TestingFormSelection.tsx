import CheckboxList from '@/components/CheckboxList';
import { WORD_CONSTANTS } from '@/constants';
import { Declension, Gender, Noun } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction } from 'react';

type TestingFormSelectionProps = {
  genders: Gender[];
  setGenders: Dispatch<SetStateAction<Gender[]>>;
  declensions: Declension[];
  setDeclensions: Dispatch<SetStateAction<Declension[]>>;
  validWords: Noun[];
};

const TestingFormSelection = ({
  genders,
  setGenders,
  declensions,
  setDeclensions,
  validWords
}: TestingFormSelectionProps) => {
  const declensionsNotToCheck = declensions.filter(
    (declension) => !validWords.some((word) => word.declension === declension)
  );

  const gendersNotToCheck = genders.filter((gender) => !validWords.some((word) => word.gender === gender));

  return (
    <>
      <p>Wähle aus, was abgefragt werden soll:</p>
      <div className='grid grid-cols-2'>
        <CheckboxList
          options={[...WORD_CONSTANTS.declension]}
          disabledOptions={declensionsNotToCheck}
          selected={declensions}
          setSelected={setDeclensions}
          label='Deklination'
          mapper={MAPPER.extended.declension}
        />
        <CheckboxList
          options={[...WORD_CONSTANTS.gender]}
          disabledOptions={gendersNotToCheck}
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
