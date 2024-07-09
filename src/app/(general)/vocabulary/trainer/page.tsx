'use client';

import { lists } from '@/data/lists';
import { APP_CONSTANTS } from '@/constants';
import { List, Word, WordProperty, WordType } from '@/types';
import { useEffect, useState } from 'react';
import { MAPPER } from '@/utils/mapper';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { words } from '@/data/words';
import ActionBar from '@/components/ActionBar';
import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import H1 from '@/components/H1';
import SelectButton from '@/components/SelectButton';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import Input from '@/components/Input';

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

const Page = () => {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Word[]>([]);
	const [activeWord, setActiveWord] = useState<Word>();

	const [checkType, setCheckType] = useState<'all' | 'limited'>('all');
	const [maxWordsInput, setMaxWordsInput] = useState<string>('');
	const [maxWords, setMaxWords] = useState<number>(0);

	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);
	const [typesToCheck, setTypesToCheck] = useState<Array<WordType>>([...APP_CONSTANTS.mainWordTypes, 'other']);

	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);
	const [wordPropertiesToCheck, setWordPropertiesToCheck] = useState<Array<WordProperty>>([
		...APP_CONSTANTS.allWordProperties
	]);
	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	const [translationInput, setTranslationInput] = useState<string>('');
	const [inputValues, setInputValues] = useState<Record<WordProperty, string>>(initialInputValues);

	useEffect(() => {
		if (stage === 'settings') {
			let ids: Array<number> = [];
			selectedLists.forEach((list) => {
				ids = ids.concat(list.words);
			});
			const remainingWords = words.filter(
				(word) =>
					ids.includes(word.id) &&
					(typesToCheck.includes(word.type) ||
						(typesToCheck.includes('other') && !(word.type in APP_CONSTANTS.mainWordTypes)))
			);

			setRemainingWords(remainingWords);
			setMaxWordsInput(remainingWords.length.toString());
		}
	}, [selectedLists, stage, typesToCheck]);

	useEffect(() => {
		setMaxWords(maxWordsInput === '' ? 0 : parseInt(maxWordsInput));
	}, [maxWordsInput]);

	useEffect(() => {
		setWordPropertiesToCheck(
			APP_CONSTANTS.allWordProperties.filter((property) => {
				return typesToCheck.some(
					(type) =>
						type in APP_CONSTANTS.mainWordTypes && (APP_CONSTANTS.wordProperties[type] as any).includes(property)
				);
			})
		);
	}, [typesToCheck]);

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
				(!activeWord.translation || compareValues(translationInput, activeWord.translation, true));

			if (allInputValuesAreCorrect || checkType === 'limited' || !checkIncorrectWordsAgain) {
				setRemainingWords((prev) => prev.splice(prev.indexOf(activeWord), 1));
			}
		} else if (stage === 'settings' && checkType === 'limited') {
			const slicedRemainingWords = remainingWords.slice(0, maxWords);

			setRemainingWords(slicedRemainingWords);
			setActiveWord(slicedRemainingWords[Math.floor(Math.random() * slicedRemainingWords.length)]);

			setStage('test');
		} else {
			if (remainingWords.length === 0) {
				setStage('results');
				return;
			}

			setStage('test');

			setActiveWord(remainingWords[Math.floor(Math.random() * remainingWords.length)]);
			resetInputs();
		}
	};

	const resetInputs = () => {
		setInputValues(initialInputValues);
		setTranslationInput('');
	};

	const validKeysToCheck: WordProperty[] = activeWord
		? APP_CONSTANTS.wordProperties[activeWord.type].filter(
				(key) => wordPropertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
		  )
		: [];

	const progressPercentage = ((maxWords - remainingWords.length) / maxWords) * 100;

	const start = remainingWords.length > 0 && maxWords > 0;

	return (
		<div className='space-y-5'>
			<H1>Vokabeltrainer</H1>
			{stage === 'settings' && (
				<>
					<p>Wähle aus, welche Lektionen du lernen möchtest:</p>
					<div className='grid grid-cols-8 gap-4'>
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
					<div className='flex justify-center space-x-3'>
						<SelectButton
							label='Alle auswählen'
							active={selectedLists.length === lists.length}
							handleClick={() => setSelectedLists(lists)}
						/>
						<SelectButton
							label='Alle abwählen'
							active={selectedLists.length === 0}
							handleClick={() => setSelectedLists([])}
						/>
					</div>
					<hr />
					<p>Wähle aus, welche Wortarten abgefragt werden sollen:</p>
					<div className='grid grid-cols-4 gap-4'>
						{([...APP_CONSTANTS.mainWordTypes, 'other'] as Array<WordType>).map((type, i) => (
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
								label={MAPPER.extended.type[type]}
							/>
						))}
					</div>
					<p>
						Es wurden <b className='text-blue-700'>{remainingWords.length} Wörter</b> ausgewählt.
					</p>
					<hr />
					<div className='grid grid-cols-3'>
						<p>Wähle aus, was abgefragt werden soll:</p>
						<CheckboxWithLabel
							checked={checkTranslation}
							handleChange={() => setCheckTranslation((prevCheckTranslation) => !prevCheckTranslation)}
							label={'Übersetzung'}
						/>
					</div>
					<div className='grid grid-cols-3'>
						{APP_CONSTANTS.mainWordTypes.map((type: WordType) => (
							<div key={type}>
								<span className={typesToCheck.includes(type) ? 'text-black' : 'text-gray-500'}>
									{MAPPER.extended.type[type]}
								</span>
								:
								{APP_CONSTANTS.wordProperties[type].map((property) => (
									<CheckboxWithLabel
										key={property}
										disabled={!typesToCheck.includes(type)}
										checked={wordPropertiesToCheck.includes(property)}
										handleChange={(checked) =>
											setWordPropertiesToCheck((prev) =>
												checked ? [...prev, property] : prev.filter((p) => p !== property)
											)
										}
										label={MAPPER.extended.wordProperty[property]}
									/>
								))}
							</div>
						))}
					</div>
					<hr />
					<p>Abfrage (die Überprüfung kann auch frühzeitig beendet werden):</p>
					<div className='flex space-x-5'>
						<SelectButton
							className='w-1/2 font-medium'
							active={checkType === 'all'}
							handleClick={() => setCheckType('all')}
							label={`Alle verfügbaren Wörter (${remainingWords.length}) abfragen`}
						/>
						<SelectButton
							className='w-1/2 font-medium'
							active={checkType === 'limited'}
							handleClick={() => setCheckType('limited')}
							label='Begrenzte Anzahl abfragen'
						/>
					</div>
					<div className='text-center'>
						{checkType === 'all' ? (
							<CheckboxWithLabel
								checked={checkIncorrectWordsAgain}
								handleChange={setCheckIncorrectWordsAgain}
								label='Bei Fehlern Wörter nochmals abprüfen'
							/>
						) : (
							<Input
								label={`Anzahl der abgefragten Wörter (max. ${remainingWords.length})`}
								handleChange={(value) =>
									setMaxWordsInput(
										(!isNaN(parseInt(value))
											? parseInt(value) > remainingWords.length
												? remainingWords.length
												: parseInt(value) < 0
												  ? 0
												  : parseInt(value)
											: value === ''
											  ? ''
											  : 0
										).toString()
									)
								}
								value={maxWordsInput}
								className={'w-1/3 text-center'}
								type='number'
							/>
						)}
					</div>
					<Button onClick={handleContinue} className='w-full' disabled={!start}>
						<span>{!start ? 'Wähle ein paar Adjektive aus, um fortzufahren' : 'Start'}</span>
					</Button>
				</>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
				<>
					<WordDisplay word={activeWord} />
					<hr />
					<div>
						{checkTranslation && activeWord.translation && (
							<Input
								label='Übersetzung (mehrere Antworten durch "," trennen)'
								readOnly={stage === 'review'}
								className={
									'w-full' +
									(stage === 'review'
										? compareValues(translationInput, activeWord.translation, true)
											? ' bg-green-300 border-none'
											: ' bg-red-300 border-none'
										: '')
								}
								value={
									stage === 'review'
										? getInputWithCorrectValue(translationInput, activeWord.translation, true)
										: translationInput
								}
								handleChange={setTranslationInput}
							/>
						)}
					</div>
					<div className='grid grid-cols-3 gap-4'>
						{validKeysToCheck.map((key, i) => {
							const value = (activeWord as any)[key];
							return (
								<TrainerInput
									key={i}
									property={key}
									value={stage === 'review' ? getInputWithCorrectValue(inputValues[key], value) : inputValues[key]}
									handleChange={(key: string, value: string) =>
										setInputValues((prevInputValues) => ({ ...prevInputValues, [key]: value }))
									}
									correct={stage === 'review' ? compareValues(inputValues[key], value) : null}
								/>
							);
						})}
					</div>
					<hr />
					<ActionBar setStage={setStage} handleContinue={handleContinue} progressPercentage={progressPercentage} />
				</>
			)}
			{stage === 'results' && (
				<>
					<p>Es wurden {maxWords - remainingWords.length} verschiedene Wörter abgefragt.</p>
					<Button onClick={() => setStage('settings')}>Neu Laden</Button>
				</>
			)}
		</div>
	);
};

export default Page;
