import Input from '@/components/Input';
import { Dispatch, SetStateAction } from 'react';
import { WordProperty } from '@/types/appConstants';
import { compareValues } from '@/utils/word/compareValues';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { usePointState } from '@/hooks/usePointState';

type TranslationInputProps = {
  correctTranslations: string[];
  stage: 'test' | 'review';
  inputValues: Record<WordProperty | 'translation', string>;
  setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
  addDifference: (difference: number) => void;
};

const TranslationInput = ({
  correctTranslations,
  stage,
  inputValues,
  setInputValues,
  addDifference
}: TranslationInputProps) => {
  const translations = inputValues.translation
    .split(',')
    .map((t) => t.trim())
    .filter((value, index, self) => self.indexOf(value) === index);

  const inputIsCorrect = compareValues(translations, correctTranslations, true);

  const { handleSetCorrect } = usePointState(stage, inputIsCorrect, addDifference, translations.length);

  let inputWithCorrectValueAppended: string;

  const formattedCorrectTranslations =
    correctTranslations.length > 0 ? correctTranslations.join(', ') : 'Keine Übersetzung';

  if (!inputValues.translation.trim()) {
    inputWithCorrectValueAppended = formattedCorrectTranslations;
  } else {
    inputWithCorrectValueAppended = `${formattedCorrectTranslations} (${translations.join(', ')})`;
  }

  const displayedValue = stage === 'review' ? inputWithCorrectValueAppended : inputValues.translation;

  return (
    <div className='flex items-end'>
      <div className='block w-full'>
        <Input
          label='Übersetzung (mehrere Antworten durch "," trennen)'
          className={clsx('w-full')}
          disabled={stage === 'review'}
          border={stage === 'test' ? 'default' : inputIsCorrect ? 'success' : 'danger'}
          value={displayedValue}
          handleChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
        />
      </div>
      {stage === 'review' && !inputIsCorrect && (
        <button
          type='button'
          className='m-1.5 w-5 flex-shrink'
          onClick={handleSetCorrect(() => {
            setInputValues((prev) => ({ ...prev, translation: correctTranslations.join(', ') }));
          })}
        >
          <Check />
        </button>
      )}
    </div>
  );
};

export default TranslationInput;
