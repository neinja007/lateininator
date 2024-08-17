import PropertyInput from '@/components/PropertyInput';
import { WordProperty } from '@/types/app_constants';
import { Stage } from '@/types/other';
import { Word } from '@/types/word';
import { MAPPER } from '@/utils/other/mapper';
import { isKeyInObject } from '@/utils/typeguards/isKeyInObject';
import { isWordPropertiesUsingSelectInput } from '@/utils/typeguards/isWordPropertiesUsingSelectInput';
import { compareValues } from '@/utils/word_utils/compareValues';
import { Dispatch, SetStateAction } from 'react';

type PropertyInputsProps = {
  validKeysToCheck: WordProperty[];
  activeWord: Word;
  inputValues: Record<WordProperty, string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
  stage: Stage;
};

const PropertyInputs = ({ validKeysToCheck, activeWord, inputValues, setInputValues, stage }: PropertyInputsProps) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {validKeysToCheck.map((key, i) => {
        let value = (activeWord as any)[key];
        let correct = stage === 'review' ? compareValues(inputValues[key], value) : undefined;

        return (
          <PropertyInput
            key={i}
            property={key}
            value={inputValues[key]}
            appendedString={
              stage === 'review'
                ? isWordPropertiesUsingSelectInput(key)
                  ? isKeyInObject(value, MAPPER.extended[key]) && MAPPER.extended[key][value]
                  : value
                : undefined
            }
            handleChange={(key: string, value: string) =>
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [key]: value
              }))
            }
            correct={correct}
          />
        );
      })}
    </div>
  );
};

export default PropertyInputs;
