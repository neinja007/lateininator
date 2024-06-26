'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word, WordInputKey } from '@/data/types';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TypeIndicator from '@/components/TypeIndicator';
import { properties } from '@/data/properties';
import TrainerInput from '@/components/TrainerInput';

function Page() {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);

	const [activeWord, setActiveWord] = useState<Word>();

	const [translationInput, setTranslationInput] = useState<string>('');

	const [inputValues, setInputValues] = useState<Record<WordInputKey, string>>({
		conjugation: '',
		declension: '',
		femininum: '',
		gender: '',
		genitive: '',
		neutrum: '',
		participle: '',
		perfect: '',
		present: ''
	});

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
		setRemainingWords(words.filter((word) => ids.includes(word.id)));
	}, [selectedLists]);

	useEffect(() => {
		setActiveWord(remainingWords[Math.floor(remainingWords.length * Math.random())] || undefined);
	}, [remainingWords]);

	function toggleList(list: List) {
		if (selectedLists.includes(list)) {
			setSelectedLists((prevSelectedLists) => prevSelectedLists.filter((prevList) => prevList.name !== list.name));
		} else {
			setSelectedLists((prevSelectedLists) => [...prevSelectedLists, list]);
		}
	}

	return (
		<div>
			<H1>Vokabeltrainer</H1>
			{stage === 'settings' && (
				<>
					<p>Wähle aus, welche Wörter du lernen möchtest:</p>
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
					<Button onClick={() => setStage('test')}>Weiter</Button>
				</>
			)}
			{(stage === 'test' || stage === 'review') && activeWord && (
				<>
					<p className='text-2xl font-medium text-blue-700'>
						{activeWord.word} <TypeIndicator type={activeWord.type} />
					</p>
					<div>
						<Input
							label='Übersetzung'
							placeholder='mehrere Antworten durch "," trennen'
							readOnly={stage === 'review'}
							className={
								'w-full' +
								(stage === 'review'
									? activeWord.translation?.includes(translationInput)
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
							if (key === undefined) return;
							return (
								<TrainerInput
									key={i}
									word={activeWord}
									inputKey={key}
									value={inputValues[key]}
									handleChange={updateInputValues}
									evaluate={stage === 'review'}
								/>
							);
						})}
					</div>
					<Button
						onClick={() => {
							setStage('review');
						}}
					>
						Weiter
					</Button>
				</>
			)}
		</div>
	);
}

export default Page;
