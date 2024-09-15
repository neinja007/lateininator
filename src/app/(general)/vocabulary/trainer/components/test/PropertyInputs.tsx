import PropertyInput from './PropertyInput';
import { WordProperty } from '@/types/appConstants';
import { Adjective, Noun, Verb, Word } from '@/types/word';
import { Dispatch, SetStateAction } from 'react';

type PropertyInputsProps = {
  wordPropertiesToCheck: WordProperty[];
  activeWord: Word;
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
  stage: 'test' | 'review';
  setPoints: Dispatch<SetStateAction<number>>;
};

const PropertyInputs = ({
  wordPropertiesToCheck,
  activeWord,
  inputValues,
  setInputValues,
  stage,
  setPoints
}: PropertyInputsProps) => {
  return (
    <div className='mt-4 grid gap-4 md:grid-cols-2'>
      {wordPropertiesToCheck.map((key, i) => {
        let correctValue: string;
        try {
          const keyToProperty: 'noun' | 'verb' | 'adjective' = activeWord.type.toLowerCase() as
            | 'noun'
            | 'verb'
            | 'adjective';
          const typeSpecificData: Partial<{ [key in WordProperty]: string }> = (activeWord as Noun & Verb & Adjective)[
            keyToProperty
          ];
          const value = typeSpecificData[key as keyof typeof typeSpecificData];
          if (value === undefined) {
            throw new Error(`Property ${key} not found in word ${activeWord}`);
          } else {
            correctValue = value;
          }
        } catch (error) {
          throw new Error(`Property ${key} not found in word ${activeWord}`);
        }

        return (
          <PropertyInput
            setPoints={setPoints}
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
