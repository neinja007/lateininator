import PropertyInput from './PropertyInput';
import { WordProperty } from '@/types/app_constants';
import { Word } from '@/types/word';
import { compareValues } from '@/utils/word_utils/compareValues';
import { Dispatch, SetStateAction } from 'react';

type PropertyInputsProps = {
  wordPropertiesToCheck: WordProperty[];
  activeWord: Word;
  inputValues: Record<WordProperty, string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
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
    <div className='grid grid-cols-2 gap-4'>
      {wordPropertiesToCheck.map((key, i) => {
        let correctValue = (activeWord as any)[key];
        let isInputCorrect = stage === 'review' ? compareValues(inputValues[key], correctValue) : undefined;

        return (
          <PropertyInput
            isInputCorrect={!!isInputCorrect}
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
