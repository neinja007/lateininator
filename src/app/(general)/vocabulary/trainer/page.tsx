'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word, WordInputKey } from '@/data/types';
import { act, useCallback, useEffect, useMemo, useState } from 'react';
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

function Page() {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);
	const [maxWords, setMaxWords] = useState<number>(0);

	const [checkIncorrectWordsAgain, setCheckIncorrectWordsAgain] = useState<boolean>(false);
	const [propertiesToCheck, setPropertiesToCheck] = useState<Array<WordInputKey>>(initialPropertiesToCheck);

	const [activeWord, setActiveWord] = useState<Word>();
	const [translationInput, setTranslationInput] = useState<string>('');
	const [translationInputIsCorrect, setTranslationInputIsCorrect] = useState<boolean>(true);

	const [inputValues, setInputValues] = useState<Record<WordInputKey, string>>(initialInputValues);
	const [correct, setCorrect] = useState<boolean>(true);

	function updateInputValues(key: WordInputKey, value: string) {
		setInputValues((prevInputValues) => {
			return { ...prevInputValues, [key]: value };
		});
	}

	useEffect(() => {
		let ids: Array<number> = [];
		selectedLists.forEach((list) => {
			ids = ids.concat(list.words);
		});
		const remainingWords = words.filter((word) => ids.includes(word.id));
		setRemainingWords(remainingWords);
		setMaxWords(remainingWords.length);
	}, [selectedLists]);

	const newWord = useCallback(() => {
		setStage('test');
		setActiveWord(remainingWords[Math.floor(Math.random() * remainingWords.length)]);
		setCorrect(true);
		setTranslationInputIsCorrect(true);
		setInputValues(initialInputValues);
		setTranslationInput('');
	}, [remainingWords]);

	const checkWord = useCallback(() => {
		setStage('review');
		Object.keys(activeWord || {})
			.filter((key) => properties.wordKeys.includes(key as WordInputKey))
			.forEach((key) => {
				setInputValues((prevInputValues) => {
					const originalInput = (prevInputValues as any)[key] || '';
					const correctInput = (activeWord as any)[key];
					if (originalInput.trim().toLowerCase() === correctInput.trim().toLowerCase()) {
						return { ...prevInputValues };
					} else {
						setCorrect(false);
						if (originalInput.trim()) {
							return { ...prevInputValues, [key]: `${originalInput} (${correctInput})` };
						} else {
							return { ...prevInputValues, [key]: `(${correctInput})` };
						}
					}
				});
			});
		setTranslationInput((prevTranslationInput) => {
			let correct = true;
			prevTranslationInput.split(',').forEach((translation) => {
				if (!activeWord?.translation?.includes(translation.trim())) correct = false;
			});
			if (prevTranslationInput.trim() === '') correct = false;
			const correctTranslation = activeWord?.translation ? activeWord?.translation?.join(', ') : 'Keine Übersetzung';
			if (correct) {
				return activeWord?.translation?.length === prevTranslationInput.split(',').length
					? prevTranslationInput
					: `${prevTranslationInput} (${correctTranslation})`;
			} else {
				setTranslationInputIsCorrect(false);
				if (prevTranslationInput.trim()) {
					return `${prevTranslationInput} (${correctTranslation})`;
				} else {
					return `(${correctTranslation})`;
				}
			}
		});

		if (!checkIncorrectWordsAgain || (correct && translationInputIsCorrect)) {
			setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord?.id));
		}
	}, [activeWord, checkIncorrectWordsAgain, correct, translationInputIsCorrect]);

	function toggleList(list: List) {
		if (selectedLists.includes(list)) {
			setSelectedLists((prevSelectedLists) => prevSelectedLists.filter((prevList) => prevList.name !== list.name));
		} else {
			setSelectedLists((prevSelectedLists) => [...prevSelectedLists, list]);
		}
	}

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
								list={list}
								active={selectedLists.includes(list)}
								handleClick={() => toggleList(list)}
							/>
						))}
					</div>
					<p>Es wurden {remainingWords.length} Wörter ausgewählt.</p>
					<hr />
					<p>Wähle aus, was abgefragt werden soll:</p>
					<div className='grid grid-cols-3'>
						<div>
							Nomen:
							{(['declension', 'genitive', 'gender'] as Array<WordInputKey>).map((property) => (
								<Checkbox
									key={property}
									checked={propertiesToCheck.includes(property)}
									handleChange={(checked) =>
										setPropertiesToCheck((prev) => (checked ? [...prev, property] : prev.filter((p) => p !== property)))
									}
									label={mapper.extended.wordKey[property]}
								/>
							))}
						</div>
						<div>
							Verben:
							{(['conjugation', 'present', 'perfect', 'participle'] as Array<WordInputKey>).map((property) => (
								<Checkbox
									key={property}
									checked={propertiesToCheck.includes(property)}
									handleChange={(checked) =>
										setPropertiesToCheck((prev) => (checked ? [...prev, property] : prev.filter((p) => p !== property)))
									}
									label={mapper.extended.wordKey[property]}
								/>
							))}
						</div>
						<div>
							Adjektive:
							{(['comparison', 'femininum', 'neutrum'] as Array<WordInputKey>).map((property) => (
								<Checkbox
									key={property}
									checked={propertiesToCheck.includes(property)}
									handleChange={(checked) =>
										setPropertiesToCheck((prev) => (checked ? [...prev, property] : prev.filter((p) => p !== property)))
									}
									label={mapper.extended.wordKey[property]}
								/>
							))}
						</div>
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
					</div>
					<div className='grid grid-cols-3 gap-3'>
						{(
							Object.keys(activeWord).filter((key) =>
								properties.wordKeys.includes(key as WordInputKey)
							) as Array<WordInputKey>
						).map((key, i) => {
							if (key === undefined || !propertiesToCheck.includes(key) || (activeWord as any)[key] === '-') return;
							return (
								<TrainerInput
									key={i}
									word={activeWord}
									inputKey={key}
									value={inputValues[key]}
									handleChange={updateInputValues}
									correct={
										stage === 'review'
											? (activeWord as Partial<Record<WordInputKey, string>>)[key] === inputValues[key]
											: null
									}
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
