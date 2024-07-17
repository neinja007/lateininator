import Input from '@/components/Input';
import { Stage } from '@/types';
import { Word, WordProperty } from '@/types';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { Dispatch, SetStateAction } from 'react';
import ui from '@/styles/ui.module.css';

type TranslationInputProps = {
  checkTranslation: boolean;
  activeWord: Word;
  stage: Stage;
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
};

const TranslationInput = ({
  checkTranslation,
  activeWord,
  stage,
  inputValues,
  setInputValues
}: TranslationInputProps) => {
  return (
    <div>
      {checkTranslation && activeWord.translation && (
        <Input
          label='Übersetzung (mehrere Antworten durch "," trennen)'
          disabled={stage === 'review'}
          className={
            'w-full ' +
            (stage === 'review'
              ? compareValues(inputValues.translation, activeWord.translation, true)
                ? ui.correct
                : ui.incorrect
              : '')
          }
          value={
            stage === 'review'
              ? getInputWithCorrectValue(inputValues.translation, activeWord.translation, true)
              : inputValues.translation
          }
          onChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
        />
      )}
    </div>
  );
};

export default TranslationInput;
