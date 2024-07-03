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
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';

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
	const [inputValues, setInputValues] = useState<Record<WordInputKey, string>>(initialInputValues);

	useEffect(() => {
		let ids: Array<number> = [];
		selectedLists.forEach((list) => {
			ids = ids.concat(list.words);
		});
		const remainingWords = words.filter((word) => ids.includes(word.id) && typesToCheck.includes(word.type));
		setRemainingWords(remainingWords);
		setMaxWords(remainingWords.length);
	}, [selectedLists, typesToCheck]);

	useEffect(() => {
		properties.types.forEach((type) => {
			if (!typesToCheck.includes(type)) {
				setPropertiesToCheck((prev) => prev.filter((p) => !(properties.wordKeys[type] as any).includes(p)));
			}
		});
	}, [typesToCheck]);

	const handleContinue = () => {
		if (stage === 'test') {
			if (!activeWord) {
				setStage('results');
				return;
			}

			setStage('review');

			if (
				(!properties.wordKeys[activeWord.type]
					.filter((key) => propertiesToCheck.includes(key))
					.some((key) => {
						const originalInput = (inputValues as any)[key] || '';
						const correctInput = (activeWord as any)[key];

						return !compareValues(originalInput, correctInput);
					}) &&
					(!activeWord.translation || compareValues(translationInput, activeWord.translation, true))) ||
				!checkIncorrectWordsAgain
			) {
				setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord?.id));
			}
		} else {
			setStage('test');

			setActiveWord(remainingWords[Math.floor(Math.random() * remainingWords.length)]);
			resetInputs();
		}
	};

	const resetInputs = () => {
		setInputValues(initialInputValues);
		setTranslationInput('');
	};

	const progressPercentage = ((maxWords - remainingWords.length) / maxWords) * 100;

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
						<Button onClick={handleContinue}>Start</Button>
					</div>
				</>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
				<>
					<p className='text-2xl font-medium text-blue-700'>
						{activeWord.word} <TypeIndicator type={activeWord.type} />
					</p>
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
					<div className='grid grid-cols-3 gap-3'>
						{properties.wordKeys[activeWord.type].map((key, i) => {
							const value = (activeWord as any)[key];
							if (!propertiesToCheck.includes(key) || value === '-') return;
							return (
								<TrainerInput
									key={i}
									word={activeWord}
									inputKey={key}
									value={stage === 'review' ? getInputWithCorrectValue(inputValues[key], value) : inputValues[key]}
									handleChange={(key: string, value: string) =>
										setInputValues((prevInputValues) => {
											return { ...prevInputValues, [key]: value };
										})
									}
									correct={stage === 'review' ? compareValues(inputValues[key], value) : null}
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
						<Button onClick={handleContinue}>Weiter</Button>
					</div>
				</>
			)}
		</div>
	);
}

export default Page;
