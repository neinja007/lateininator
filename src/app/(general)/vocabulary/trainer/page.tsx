'use client';

import SelectButton from '@/components/SelectButton';
import H1 from '@/components/ui/H1';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { Words, List, Word } from '@/data/types';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TypeIndicator from '@/components/TypeIndicator';

function Page() {
	const [stage, setStage] = useState<'settings' | 'testing' | 'results'>('settings');

	const [remainingWords, setRemainingWords] = useState<Words>([]);
	const [selectedLists, setSelectedLists] = useState<Array<List>>([]);

	const [activeWord, setActiveWord] = useState<Word>();

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
					<Button onClick={() => setStage('testing')}>Weiter</Button>
				</>
			)}
			{stage === 'testing' && activeWord && (
				<>
					<p className='text-2xl font-medium text-blue-700'>
						{activeWord.word} <TypeIndicator type={activeWord.type} />
					</p>
					<div className='grid grid-cols-3 gap-3'>
						<Input label='Übersetzung' placeholder='mehrere Antworten durch "," trennen' className='w-full' />
						{activeWord.type === 'noun' && <Input label='Genitiv' className='w-full' />}
					</div>
					<Button
						onClick={() =>
							setRemainingWords((prevRemainingWords) => prevRemainingWords.filter((word) => word.id !== activeWord.id))
						}
					>
						Weiter
					</Button>
				</>
			)}
		</div>
	);
}

export default Page;
