import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  setPoints: Dispatch<SetStateAction<number>>;
};

const TranslationInput = ({
  correctTranslations,
  stage,
  inputValues,
  setInputValues,
  setPoints
}: TranslationInputProps) => {
  const [disablePoints, setDisablePoints] = useState<boolean>(false);

  const translations = inputValues.translation
    .split(',')
    .map((t) => t.trim())
    .filter((value, index, self) => self.indexOf(value) === index);

  const inputIsCorrect = compareValues(translations, correctTranslations, true);

  const correctValueIndicatorClasses = stage === 'review' ? (inputIsCorrect ? ui.correct : ui.incorrect) : '';

  let inputWithCorrectValueAppended: string;

  const formattedCorrectTranslations =
    correctTranslations.length > 0 ? correctTranslations.join(', ') : 'Keine Übersetzung';

  if (!inputValues.translation.trim()) {
    inputWithCorrectValueAppended = formattedCorrectTranslations;
  } else {
    inputWithCorrectValueAppended = `${formattedCorrectTranslations} (${translations.join(', ')})`;
  }

  const displayedValue = stage === 'review' ? inputWithCorrectValueAppended : inputValues.translation;

  useEffect(() => {
    if (stage === 'review' && inputIsCorrect && !disablePoints) {
      setPoints((prevPoints) => prevPoints + translations.length);
      setDisablePoints(true);
    }
  }, [disablePoints, inputIsCorrect, setPoints, stage, translations.length]);

  useEffect(() => {
    if (stage === 'test' && disablePoints) {
      setDisablePoints(false);
    }
  }, [disablePoints, stage]);

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
          className='m-1.5 w-5 flex-shrink'
          onClick={() => {
            setInputValues((prev) => ({ ...prev, translation: correctTranslations.join(', ') }));
            setDisablePoints(true);
          }}
        >
          <Check />
        </button>
      )}
    </div>
  );
};

export default TranslationInput;
