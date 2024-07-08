'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word, WordInputKey, Type } from '@/data/types';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { properties } from '@/data/properties';
import TrainerInput from '@/components/TrainerInput';
import Checkbox from '@/components/ui/Checkbox';
import { mapper } from '@/data/mapper';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import ActionBar from '@/components/ActionBar';
import WordDisplay from '@/components/WordDisplay';

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

const Page = () => {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [activeWord, setActiveWord] = useState<Word>();
	const [maxWordsInput, setMaxWordsInput] = useState<string>('');
	const [maxWords, setMaxWords] = useState<number>(0);

	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);
	const [typesToCheck, setTypesToCheck] = useState<Array<Type>>([...properties.mainTypes, 'other']);

	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);
	const [propertiesToCheck, setPropertiesToCheck] = useState<Array<WordInputKey>>(initialPropertiesToCheck);
	const [checkTranslation, setCheckTranslation] = useState<boolean>(true);

	const [translationInput, setTranslationInput] = useState<string>('');
	const [inputValues, setInputValues] = useState<Record<WordInputKey, string>>(initialInputValues);

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
						(typesToCheck.includes('other') && !properties.mainTypes.includes(word.type)))
			);
			setRemainingWords(remainingWords);
			setMaxWordsInput(remainingWords.length.toString());
		}
	}, [selectedLists, stage, typesToCheck]);

	useEffect(() => {
		setMaxWords(maxWordsInput === '' ? 0 : parseInt(maxWordsInput));
	}, [maxWordsInput]);

	useEffect(() => {
		setPropertiesToCheck(
			initialPropertiesToCheck.filter((property) => {
				return typesToCheck.some(
					(type) => properties.mainTypes.includes(type) && (properties.wordKeys[type] as any).includes(property)
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

			if (
				(!validKeysToCheck.some((key) => {
					const originalInput = (inputValues as any)[key] || '';
					const correctInput = (activeWord as any)[key];

					return !compareValues(originalInput, correctInput);
				}) &&
					(!activeWord.translation || compareValues(translationInput, activeWord.translation, true))) ||
				!checkIncorrectWordsAgain
			) {
				setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord?.id));
			}
		} else if (stage === 'settings') {
			const slicedRemainingWords = remainingWords.slice(0, maxWords);

			if (slicedRemainingWords.length === 0) {
				return;
			} else {
				setRemainingWords(slicedRemainingWords);
				setActiveWord(slicedRemainingWords[Math.floor(Math.random() * maxWords)]);

				setStage('test');
			}
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

	const validKeysToCheck = activeWord
		? properties.wordKeys[activeWord.type].filter(
				(key) => propertiesToCheck.includes(key) && key in activeWord && (activeWord as any)[key] !== '-'
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
						{([...properties.mainTypes, 'other'] as Array<Type>).map((type, i) => (
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
						{properties.mainTypes.map((type: Type) => (
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
					<p>Weitere Optionen:</p>
					<div className='grid grid-cols-3'>
						<Checkbox
							checked={checkIncorrectWordsAgain}
							handleChange={setCheckIncorrectWordsAgain}
							label='Bei Fehlern Wörter nochmals abprüfen'
						/>
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
							className={'w-full text-center'}
							type='number'
						/>
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
									inputKey={key}
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
