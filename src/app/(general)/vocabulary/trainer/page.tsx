'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word, WordInputKey, Type } from '@/data/types';
import { useCallback, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TypeIndicator from '@/components/TypeIndicator';
import { properties } from '@/data/properties';
import TrainerInput from '@/components/TrainerInput';
import Checkbox from '@/components/ui/Checkbox';
import { mapper } from '@/data/mapper';

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
	present: ''
};

const initialPropertiesToCheck: Array<WordInputKey> = [
	'declension',
	'genitive',
	'gender',
	'conjugation',
	'present',
	'perfect',
	'participle',
	'comparison',
	'femininum',
	'neutrum'
];

const initialTypesToCheck: Array<Type> = ['noun', 'verb', 'adjective', 'other', 'adverb', 'pronoun'];

function Page() {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [activeWord, setActiveWord] = useState<Word>();
	const [maxWords, setMaxWords] = useState<number>(0);

	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);
	const [typesToCheck, setTypesToCheck] = useState<Array<Type>>(initialTypesToCheck);

	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);
	const [propertiesToCheck, setPropertiesToCheck] = useState<Array<WordInputKey>>(initialPropertiesToCheck);
	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	const [translationInput, setTranslationInput] = useState<string>('');
	const [translationInputIsCorrect, setTranslationInputIsCorrect] = useState<boolean>(true);

	const [inputValues, setInputValues] = useState<Record<WordInputKey, string>>(initialInputValues);
	const [correct, setCorrect] = useState<boolean>(true);

	const [progressPercentage, setProgressPercentage] = useState<number>(0);

	useEffect(() => {
		let ids: Array<number> = [];
		selectedLists.forEach((list) => {
			ids = ids.concat(list.words);
		});
		const remainingWords = words.filter((word) => ids.includes(word.id) && typesToCheck.includes(word.type));
		setRemainingWords(remainingWords);
		setMaxWords(remainingWords.length);
	}, [selectedLists, typesToCheck]);

	const newWord = useCallback(() => {
		setStage('test');
		setActiveWord(remainingWords[Math.floor(Math.random() * remainingWords.length)]);
		resetInputs();
	}, [remainingWords]);

	const resetInputs = () => {
		setCorrect(true);
		setTranslationInputIsCorrect(true);
		setInputValues(initialInputValues);
		setTranslationInput('');
	};

	const validateInput = (originalInput: string, correctInput: string) => {
		if (originalInput.trim().toLowerCase() === correctInput.trim().toLowerCase()) {
			return originalInput;
		} else {
			setCorrect(false);
			return originalInput.trim() ? `${originalInput} (${correctInput})` : `(${correctInput})`;
		}
	};

	const validateTranslation = useCallback(
		(prevTranslationInput: string, correctTranslation: string) => {
			let AllTranslationsAreCorrect = true;

			prevTranslationInput.split(',').forEach((translation) => {
				if (!activeWord?.translation?.includes(translation.trim())) AllTranslationsAreCorrect = false;
			});
			if (prevTranslationInput.trim() === '') AllTranslationsAreCorrect = false;

			if (AllTranslationsAreCorrect) {
				return activeWord?.translation?.length === prevTranslationInput.split(',').length
					? prevTranslationInput
					: `${prevTranslationInput} (${correctTranslation})`;
			} else {
				setTranslationInputIsCorrect(false);
				return prevTranslationInput.trim()
					? `${prevTranslationInput} (${correctTranslation})`
					: `(${correctTranslation})`;
			}
		},
		[activeWord]
	);

	const checkWord = useCallback(() => {
		setStage('review');
		if (activeWord) {
			properties.wordKeys[activeWord.type]
				.filter((key) => propertiesToCheck.includes(key))
				.forEach((key) => {
					setInputValues((prevInputValues) => {
						const originalInput = (prevInputValues as any)[key] || '';
						const correctInput = (activeWord as any)[key];
						return { ...prevInputValues, [key]: validateInput(originalInput, correctInput) };
					});
				});

			if (checkTranslation) {
				const correctTranslation = activeWord.translation ? activeWord.translation.join(', ') : 'Keine Übersetzung';
				setTranslationInput((prevTranslationInput) => validateTranslation(prevTranslationInput, correctTranslation));

				// translation state is not updated at this time, so we need to check the input value
			}
		}

		if ((correct && translationInputIsCorrect) || !checkIncorrectWordsAgain) {
			console.log('correct', correct, 'translationInputIsCorrect', translationInputIsCorrect);
			setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord?.id));
		}
	}, [
		activeWord,
		checkIncorrectWordsAgain,
		checkTranslation,
		correct,
		propertiesToCheck,
		translationInputIsCorrect,
		validateTranslation
	]);

	useEffect(() => {
		properties.types.forEach((type) => {
			if (!typesToCheck.includes(type)) {
				setPropertiesToCheck((prev) => prev.filter((p) => !(properties.wordKeys[type] as any).includes(p)));
			}
		});
	}, [typesToCheck]);

	useEffect(() => {
		setProgressPercentage(((maxWords - remainingWords.length) / maxWords) * 100);
	}, [remainingWords, maxWords]);

	return (
		<div>
			<H1>Vokabeltrainer</H1>
			{stage === 'settings' && (
				<>
					<p>Wähle aus, welche Lektionen du lernen möchtest:</p>
					<div className='space-x-3'>
						{lists.map((list, i) => (
							<SelectButton
								key={i}
								active={selectedLists.includes(list)}
								handleClick={() =>
									setSelectedLists((prevSelectedLists) =>
										prevSelectedLists.includes(list)
											? prevSelectedLists.filter((t) => t !== list)
											: [...prevSelectedLists, list]
									)
								}
								label={list.name}
							/>
						))}
					</div>
					<hr />
					<p>Wähle aus, welche Wortarten abgefragt werden sollen:</p>
					<div className='space-x-3'>
						{properties.types.map((type, i) => (
							<SelectButton
								key={i}
								active={typesToCheck.includes(type)}
								handleClick={() =>
									setTypesToCheck((prevTypesToCheck) =>
										prevTypesToCheck.includes(type)
											? prevTypesToCheck.filter((t) => t !== type)
											: [...prevTypesToCheck, type]
									)
								}
								label={mapper.extended.type[type]}
							/>
						))}
					</div>
					<p>
						Es wurden <b className='text-blue-700'>{remainingWords.length} Wörter</b> ausgewählt.
					</p>
					<hr />
					<div className='grid grid-cols-3'>
						<p>Wähle aus, was abgefragt werden soll:</p>
						<Checkbox
							checked={checkTranslation}
							handleChange={() => setCheckTranslation((prevCheckTranslation) => !prevCheckTranslation)}
							label={'Übersetzung'}
						/>
					</div>
					<div className='grid grid-cols-3'>
						{(['noun', 'verb', 'adjective'] as Array<Type>).map((type: Type) => (
							<div key={type}>
								<span className={typesToCheck.includes(type) ? 'text-black' : 'text-gray-500'}>
									{mapper.extended.type[type]}
								</span>
								:
								{properties.wordKeys[type].map((property) => (
									<Checkbox
										key={property}
										disabled={!typesToCheck.includes(type)}
										checked={propertiesToCheck.includes(property)}
										handleChange={(checked) =>
											setPropertiesToCheck((prev) =>
												checked ? [...prev, property] : prev.filter((p) => p !== property)
											)
										}
										label={mapper.extended.wordKey[property]}
									/>
								))}
							</div>
						))}
					</div>
					<hr />
					<div>
						<Checkbox
							checked={checkIncorrectWordsAgain}
							handleChange={setCheckIncorrectWordsAgain}
							label='Bei Fehlern Wörter nochmals abprüfen'
						/>
					</div>
					<div>
						<Button onClick={newWord}>Start</Button>
					</div>
				</>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
				<>
					<p className='text-2xl font-medium text-blue-700'>
						{activeWord.word} <TypeIndicator type={activeWord.type} />
					</p>
					<div>
						{checkTranslation && (
							<Input
								label='Übersetzung (mehrere Antworten durch "," trennen)'
								readOnly={stage === 'review'}
								className={
									'w-full' +
									(stage === 'review'
										? translationInputIsCorrect
											? ' bg-green-300 border-none'
											: ' bg-red-300 border-none'
										: '')
								}
								value={translationInput}
								handleChange={setTranslationInput}
							/>
						)}
					</div>
					<div className='grid grid-cols-3 gap-3'>
						{properties.wordKeys[activeWord.type].map((key, i) => {
							const value = (activeWord as any)[key];
							if (!propertiesToCheck.includes(key) || value === '-') return;
							return (
								<TrainerInput
									key={i}
									word={activeWord}
									inputKey={key}
									value={inputValues[key]}
									handleChange={(key: string, value: string) =>
										setInputValues((prevInputValues) => {
											return { ...prevInputValues, [key]: value };
										})
									}
									correct={stage === 'review' ? value === inputValues[key] : null}
								/>
							);
						})}
					</div>
					<div className='flex'>
						<Button
							onClick={() => {
								setStage('results');
							}}
						>
							Beenden
						</Button>
						<div className='flex-grow w-auto h-6 mx-3 my-auto rounded-lg bg-gray-400 overflow-hidden'>
							<div className='h-full bg-green-400 rounded-lg' style={{ width: `${progressPercentage}%` }}>
								<span className='float-end mr-1'>{Math.floor(progressPercentage)}%</span>
							</div>
						</div>
						<Button onClick={stage === 'test' ? checkWord : newWord}>Weiter</Button>
					</div>
				</>
			)}
		</div>
	);
}

export default Page;
