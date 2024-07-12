'use client';

import { APP_CONSTANTS } from '@/constants';
import { WordProperty } from '@/types';
import { useState } from 'react';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import ActionBar from '@/components/ActionBar';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import Input from '@/components/Input';
import Settings from './components/Settings';
import { useStage } from '@/hooks/useStage';
import { useActiveWord } from '@/hooks/useActiveWord';
import { MAPPER } from '@/utils/mapper';
import { isKeyInObject, isWordPropertiesUsingSelectInput } from '@/utils/typeguards';

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

const Page = () => {
	const { stage, setStage } = useStage();

	const { activeWord, maxWords, remainingWords, updatePossibleWords, updateActiveWord, updateRemainingWords } =
		useActiveWord(false);
	const [checkType, setCheckType] = useState<'all' | 'limited'>('all');

	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);
	const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<Array<WordProperty>>([
		...APP_CONSTANTS.allWordProperties
	]);
	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	const [inputValues, setInputValues] = useState<Record<WordProperty | 'translation', string>>(initialInputValues);

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

			if (allInputValuesAreCorrect || checkType === 'limited' || !checkIncorrectWordsAgain) {
				updatePossibleWords();
			}
		} else {
			if (remainingWords === 0) {
				setStage('results');
				return;
			}

			updateActiveWord(false);
			setStage('test');

			setInputValues(initialInputValues);
		}
	};

	const validKeysToCheck: WordProperty[] = activeWord
		? APP_CONSTANTS.wordProperties[activeWord.type].filter(
				(key) => wordPropertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
			)
		: [];

	const progressPercentage = ((maxWords - remainingWords) / maxWords) * 100;

	return (
		<div className='space-y-5'>
			<Heading>Vokabeltrainer</Heading>
			{stage === 'settings' && (
				<Settings
					checkTranslation={checkTranslation}
					setCheckTranslation={setCheckTranslation}
					wordPropertiesToCheck={wordPropertiesToCheck}
					setWordPropertiesToCheck={setWordPropertiesToCheck}
					checkType={checkType}
					setCheckType={setCheckType}
					checkIncorrectWordsAgain={checkIncorrectWordsAgain}
					setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
					updatePossibleWords={updatePossibleWords}
					handleContinue={handleContinue}
					start={remainingWords > 0}
				/>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
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
								handleChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
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
					<ActionBar setStage={setStage} handleContinue={handleContinue} progressPercentage={progressPercentage} />
				</>
			)}
			{stage === 'results' && (
				<>
					<p>Es wurden {maxWords - remainingWords} verschiedene Wörter abgefragt.</p>
					<Button onClick={() => setStage('settings')}>Neu Laden</Button>
				</>
			)}
		</div>
	);
};

export default Page;
