'use client';

import H1 from '@/components/ui/H1';
import Select from '@/components/ui/Select';
import { words } from '@/data/words';
import { lists } from '@/data/lists';
import { useEffect, useState } from 'react';
import { Word } from '@/data/types';
import SelectButton from '@/components/SelectButton';

const Page = () => {
	const [maxUnit, setMaxUnit] = useState(0);
	const [selectedWords, setSelectedWords] = useState<Array<Word>>([]);

	const [testingType, setTestingType] = useState<'table' | 'individual'>('table');

	useEffect(() => {
		const ids = lists
			.filter((list) => list.id < maxUnit)
			.reduce((acc: any, list) => {
				return acc.concat(list.words);
			}, []);
		console.log(ids);
		setSelectedWords(words.filter((word) => ids.includes(word.id) && word.type === 'adjective'));
	}, [maxUnit]);

	return (
		<div className='space-y-5'>
			<H1>Flexionstrainer: Adjektive</H1>
			<p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
			<div className='flex'>
				<Select
					label='Lektion'
					value={maxUnit}
					handleChange={setMaxUnit}
					options={lists.reduce((acc: any, list) => {
						acc[list.id] = list.name;
						return acc;
					}, {})}
				/>
				<span className='mt-auto mb-1.5 ml-5'>
					Du hast <b className='text-blue-700'>{selectedWords.length} Adjektive</b> ausgewählt.
				</span>
			</div>
			<hr />
			<p>Wähle aus, wie du abgefragt werden möchtest:</p>
			<div className='flex space-x-5'>
				<SelectButton
					className='w-1/2 font-medium'
					active={testingType === 'table'}
					handleClick={() => setTestingType('table')}
					label='Formen mit Tabellen abfragen'
				/>
				<SelectButton
					className='w-1/2 font-medium'
					active={testingType === 'individual'}
					handleClick={() => setTestingType('individual')}
					label='Formen einzeln abfragen'
				/>
			</div>
			<hr />
			<p>Wähle aus, was abgefragt werden soll:</p>
		</div>
	);
};

export default Page;
