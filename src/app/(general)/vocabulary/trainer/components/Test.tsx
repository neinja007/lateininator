import ActionBar from '@/components/ActionBar';
import Input from '@/components/Input';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import { APP_CONSTANTS } from '@/constants';
import { useActiveWord } from '@/hooks/useActiveWord';
import { Stage } from '@/hooks/useStage';
import { Word, WordProperty } from '@/types';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { MAPPER } from '@/utils/mapper';
import { isKeyInObject, isWordPropertiesUsingSelectInput } from '@/utils/typeguards';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const initialInputValues = {
	conjugation: '',
	declension: '',
	comparison: '',
	femininum: '',
	gender: '',
	genitive: '',
	neutrum: '',
	participle: '',
	perfect: '',
	present: '',
	translation: ''
};

type TestProps = {
	stage: Stage;
	checkTranslation: boolean;
	checkIncorrectWordsAgain: boolean;
	wordPropertiesToCheck: WordProperty[];
	wordsToCheck: Word[];
	setStage: Dispatch<SetStateAction<Stage>>;
};

const Test = ({
	stage,
	checkTranslation,
	checkIncorrectWordsAgain,
	wordPropertiesToCheck,
	wordsToCheck,
	setStage
}: TestProps) => {
	const { activeWord, maxWords, remainingWords, updateActiveWord, updateWords } = useActiveWord(false);
	const [inputValues, setInputValues] = useState<Record<WordProperty | 'translation', string>>(initialInputValues);

	useEffect(() => {
		updateWords(wordsToCheck);
		updateActiveWord();
	}, [updateActiveWord, updateWords, wordsToCheck]);

	const handleContinue = () => {
		if (stage === 'test') {
			if (!activeWord) {
				throw new Error('activeWord is undefined');
			}

			setStage('review');

			const allInputValuesAreCorrect =
				!validKeysToCheck.some((key) => {
					const originalInput = (inputValues as any)[key] || '';
					const correctInput = (activeWord as any)[key];

					return !compareValues(originalInput, correctInput);
				}) &&
				(!activeWord.translation || compareValues(inputValues.translation, activeWord.translation, true));

			if (allInputValuesAreCorrect || !checkIncorrectWordsAgain) {
				updateWords();
			}
		} else {
			if (remainingWords === 0) {
				setStage('results');
				return;
			}

			updateActiveWord();
			setStage('test');

			setInputValues(initialInputValues);
		}
	};

	const validKeysToCheck: WordProperty[] = activeWord
		? APP_CONSTANTS.wordProperties[activeWord.type].filter(
				(key) => wordPropertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
			)
		: [];
	if (!activeWord) {
		throw new Error('activeWord is undefined');
	}
	return (
		<>
			<WordDisplay word={activeWord} />
			<hr />
			<div>
				{checkTranslation && activeWord.translation && (
					<Input
						label='Übersetzung (mehrere Antworten durch "," trennen)'
						disabled={stage === 'review'}
						className={
							'w-full' +
							(stage === 'review'
								? compareValues(inputValues.translation, activeWord.translation, true)
									? ' bg-green-300 border-none'
									: ' bg-red-300 border-none'
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
			{validKeysToCheck.length > 0 && (
				<div className='grid grid-cols-2 gap-4'>
					{validKeysToCheck.map((key, i) => {
						let value = (activeWord as any)[key];

						return (
							<TrainerInput
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
								correct={stage === 'review' ? compareValues(inputValues[key], value) : undefined}
							/>
						);
					})}
				</div>
			)}
			<hr />
			<ActionBar handleContinue={handleContinue} progressPercentage={((maxWords - remainingWords) / maxWords) * 100} />
		</>
	);
};

export default Test;
