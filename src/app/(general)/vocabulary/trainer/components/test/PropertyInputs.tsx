import PropertyInput from './PropertyInput';
import { WordProperty } from '@/types/appConstants';
import { Word } from '@/types/word';
import { Dispatch, SetStateAction } from 'react';

type PropertyInputsProps = {
  wordPropertiesToCheck: WordProperty[];
  activeWord: Word;
  inputValues: Record<WordProperty, string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty, string>>>;
  stage: 'test' | 'review';
};

const PropertyInputs = ({
  wordPropertiesToCheck,
  activeWord,
  inputValues,
  setInputValues,
  stage
}: PropertyInputsProps) => {
  return (
    <div className='mt-4 grid gap-4 md:grid-cols-2'>
      {wordPropertiesToCheck.map((key, i) => {
        let correctValue = (activeWord as any)[key];

        return (
          <PropertyInput
            stage={stage}
            key={i}
            property={key}
            inputValue={inputValues[key]}
            handleChange={(key: string, value: string) =>
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [key]: value
              }))
            }
            correctValue={correctValue}
          />
        );
      })}
    </div>
  );
};

export default PropertyInputs;
