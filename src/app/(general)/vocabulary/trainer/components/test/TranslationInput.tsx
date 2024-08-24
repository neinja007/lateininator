import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import ui from '@/styles/ui.module.css';
import { WordProperty } from '@/types/appConstants';
import { compareValues } from '@/utils/word/compareValues';
import clsx from 'clsx';
import { Check } from 'lucide-react';

type TranslationInputProps = {
  correctTranslations: string[];
  stage: 'test' | 'review';
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
};

const TranslationInput = ({ correctTranslations, stage, inputValues, setInputValues }: TranslationInputProps) => {
  const inputIsCorrect = compareValues(inputValues.translation, correctTranslations, true);

  const correctValueIndicatorClasses = stage === 'review' ? (inputIsCorrect ? ui.correct : ui.incorrect) : '';

  let inputWithCorrectValueAppended: string;

  const formattedCorrectTranslations =
    correctTranslations.length > 0 ? correctTranslations.join(', ') : 'Keine Übersetzung';

  if (!inputValues.translation.trim()) {
    inputWithCorrectValueAppended = `(${formattedCorrectTranslations})`;
  } else if (inputIsCorrect) {
    inputWithCorrectValueAppended = `${inputValues.translation} (${formattedCorrectTranslations})`;
  } else {
    inputWithCorrectValueAppended = `${inputValues.translation} (${formattedCorrectTranslations})`;
  }

  const displayedValue = stage === 'review' ? inputWithCorrectValueAppended : inputValues.translation;

  return (
    <div className='flex items-end'>
      <div className='block w-full'>
        <Input
          label='Übersetzung (mehrere Antworten durch "," trennen)'
          className={clsx('w-full', correctValueIndicatorClasses)}
          disabled={stage === 'review'}
          value={displayedValue}
          onChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
        />
      </div>
      {stage === 'review' && !inputIsCorrect && (
        <button
          type='button'
          className={'m-1.5 w-5 flex-shrink'}
          onClick={() => setInputValues((prev) => ({ ...prev, translation: correctTranslations.join(', ') }))}
        >
          <Check />
        </button>
      )}
    </div>
  );
};

export default TranslationInput;
