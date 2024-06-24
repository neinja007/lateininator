'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word, NounDeclension, Gender, Conjugation, AdjectiveDeclension } from '@/data/types';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TypeIndicator from '@/components/TypeIndicator';
import Select from '@/components/ui/Select';
import { properties } from '@/data/properties';
import { mapper } from '@/data/mapper';

function Page() {
	const [stage, setStage] = useState<'settings' | 'test' | 'review' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);

	const [activeWord, setActiveWord] = useState<Word>();

	const [translationInput, setTranslationInput] = useState<string>('');

	const [nounDeclensionInput, setNounDeclensionInput] = useState<NounDeclension>('');
	const [genitiveInput, setGenitiveInput] = useState<string>('');
	const [genderInput, setGenderInput] = useState<Gender>('');

	const [conjugationInput, setConjugationInput] = useState<Conjugation>('');
	const [presInput, setPresInput] = useState<string>('');
	const [perfInput, setPerfInput] = useState<string>('');
	const [plusInput, setPlusInput] = useState<string>('');

	const [adjectiveDeclensionInput, setAdjectiveDeclensionInput] = useState<AdjectiveDeclension>('');
	const [femininumInput, setFemininumInput] = useState('');
	const [neutrumInput, setNeutrumInput] = useState('');

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
			{stage === 'test' && activeWord && (
				<>
					<p className='text-2xl font-medium text-blue-700'>
						{activeWord.word} <TypeIndicator type={activeWord.type} />
					</p>
					<div>
						<Input
							label='Übersetzung'
							placeholder='mehrere Antworten durch "," trennen'
							className='w-full'
							value={translationInput}
							onChange={(e) => setTranslationInput(e.target.value)}
						/>
					</div>
					<div className='grid grid-cols-3 gap-3'>
						{activeWord.type === 'noun' && (
							<>
								<Select
									label='Deklination'
									options={properties.nounDeclension.reduce((object: { [key: string]: string }, declension) => {
										object[declension] = mapper.extended.nounDeclension[declension];
										return object;
									}, {})}
									className='w-full'
									value={nounDeclensionInput}
									handleChange={setNounDeclensionInput}
								/>
								<Input label='Genitiv' className='w-full' />
								<Select
									label='Geschlecht'
									options={properties.gender.reduce((object: { [key: string]: string }, gender) => {
										object[gender] = mapper.extended.gender[gender];
										return object;
									}, {})}
									className='w-full'
									value={nounDeclensionInput}
									handleChange={setNounDeclensionInput}
								/>
							</>
						)}
					</div>
					<Button
						onClick={() => {
							setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord.id));
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
