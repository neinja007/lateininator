import Button from '@/components/Button';
import CheckboxList from '@/components/CheckboxList';
import { WORD_CONSTANTS } from '@/constants';
import { Noun } from '@/types/word';
import { Gender, Declension } from '@/types/word_constants';
import { MAPPER } from '@/utils/other/mapper';
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
      <div className='grid grid-cols-3'>
        <p className='col-span-2'>Wähle aus, was abgefragt werden soll:</p>
        <div className='grid grid-cols-2 gap-x-4'>
          <Button
            color={
              declensions.length === WORD_CONSTANTS.declension.length && genders.length === WORD_CONSTANTS.gender.length
                ? 'blue'
                : 'default'
            }
            onClick={() => {
              setDeclensions([...WORD_CONSTANTS.declension]);
              setGenders([...WORD_CONSTANTS.gender]);
            }}
          >
            Alle auswählen
          </Button>
          <Button
            color={declensions.length === 0 && genders.length === 0 ? 'blue' : 'default'}
            onClick={() => {
              setDeclensions([]);
              setGenders([]);
            }}
          >
            Alle abwählen
          </Button>
        </div>
      </div>
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
