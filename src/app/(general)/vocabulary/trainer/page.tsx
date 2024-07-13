'use client';

import { APP_CONSTANTS } from '@/constants';
import { WordProperty } from '@/types';
import { useCallback, useMemo, useState } from 'react';
import Heading from '@/components/Heading';
import Settings from './components/Settings';
import { Stage, useStage } from '@/hooks/useStage';
import Test from './components/Test';
import { useActiveWord } from '@/hooks/useActiveWord';
import { compareValues } from '@/utils/inputUtils';
import Results from './components/Results';

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
	const { activeWord, remainingWords, maxWords, updateActiveWord, updateWords } = useActiveWord(false);

	const [inputValues, setInputValues] = useState<Record<WordProperty | 'translation', string>>(initialInputValues);
	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);

	const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<Array<WordProperty>>([
		...APP_CONSTANTS.allWordProperties
	]);

	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	const validKeysToCheck: WordProperty[] = useMemo(
		() =>
			activeWord
				? APP_CONSTANTS.wordProperties[activeWord.type].filter(
						(key) => wordPropertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
					)
				: [],
		[activeWord, wordPropertiesToCheck]
	);

	const handleContinue = useCallback(
		(newStage?: Stage) => {
			if (newStage) {
				setStage(newStage);
				return;
			} else if (stage === 'test') {
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
		},
		[
			stage,
			setStage,
			activeWord,
			validKeysToCheck,
			inputValues,
			checkIncorrectWordsAgain,
			updateWords,
			remainingWords,
			updateActiveWord
		]
	);

	return (
		<div className='space-y-5'>
			<Heading>Vokabeltrainer</Heading>
			{stage === 'settings' && (
				<Settings
					checkTranslation={checkTranslation}
					setCheckTranslation={setCheckTranslation}
					wordPropertiesToCheck={wordPropertiesToCheck}
					setWordPropertiesToCheck={setWordPropertiesToCheck}
					checkIncorrectWordsAgain={checkIncorrectWordsAgain}
					setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
					handleContinue={handleContinue}
					updateWords={updateWords}
					enableStart={remainingWords > 0}
				/>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
				<Test
					handleContinue={handleContinue}
					progressPercentage={((maxWords - remainingWords) / maxWords) * 100}
					activeWord={activeWord}
					validKeysToCheck={validKeysToCheck}
					inputValues={inputValues}
					setInputValues={setInputValues}
					stage={stage}
					checkTranslation={checkTranslation}
					setStage={setStage}
				/>
			)}
			{stage === 'results' && <Results setStage={setStage} />}
		</div>
	);
};

export default Page;
