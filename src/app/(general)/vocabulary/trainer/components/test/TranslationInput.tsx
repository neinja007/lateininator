import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import ui from '@/styles/ui.module.css';
import { WordProperty } from '@/types/app_constants';
import { compareValues } from '@/utils/word_utils/compareValues';
import clsx from 'clsx';

type TranslationInputProps = {
  correctTranslations: string[];
  stage: 'test' | 'review';
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
};

const TranslationInput = ({ correctTranslations, stage, inputValues, setInputValues }: TranslationInputProps) => {
  const correctValueIndicatorClasses =
    stage === 'review'
      ? compareValues(inputValues.translation, correctTranslations, true)
        ? ui.correct
        : ui.incorrect
      : '';

  let inputWithCorrectValueAppended: string;

  const formattedCorrectTranslations =
    correctTranslations.length > 0 ? correctTranslations.join(', ') : 'Keine Übersetzung';

  if (!inputValues.translation.trim()) {
    inputWithCorrectValueAppended = `(${formattedCorrectTranslations})`;
  } else if (compareValues(inputValues.translation, correctTranslations, true)) {
    inputWithCorrectValueAppended = `${inputValues.translation} (${formattedCorrectTranslations})`;
  } else {
    inputWithCorrectValueAppended = `${inputValues.translation} (${formattedCorrectTranslations})`;
  }

  const displayedValue = stage === 'review' ? inputWithCorrectValueAppended : inputValues.translation;

  return (
    <Input
      label='Übersetzung (mehrere Antworten durch "," trennen)'
      className={clsx('w-full', correctValueIndicatorClasses)}
      disabled={stage === 'review'}
      value={displayedValue}
      onChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
    />
  );
};

export default TranslationInput;
