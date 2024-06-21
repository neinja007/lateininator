'use client';

import { Words } from '@/data/types';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';
import WordRow from '@/components/WordRow';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Header from '@/components/ui/Header';
import { CreditCard, List } from 'react-feather';
import WordCard from '@/components/WordCard';

function Page() {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Words>([]);
	const [view, setView] = useState<'cards' | 'list'>('list');

	useEffect(() => {
		setResults(words.filter((word) => word.word.includes(query)));
	}, [query]);

	return (
		<div>
			<Header>Wörterbuch</Header>

			<div>
				Suche: <Input placeholder='schola' value={query} onChange={(e) => setQuery(e.target.value)} />
				<Button className='ml-4'>Erweiterte Suche</Button>
			</div>
			<div className='inline-block'>
				Wir haben{' '}
				<b>
					{results.length} {results.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
				</b>{' '}
				gefunden.
			</div>
			<div className='m-2 flex float-end *:flex'>
				<button className={view === 'cards' ? 'text-theme' : 'text-gray-500'} onClick={() => setView('cards')}>
					Tabellenansicht <CreditCard className='ml-2 mr-8' />
				</button>
				<button className={view === 'list' ? 'text-theme' : 'text-gray-500'} onClick={() => setView('list')}>
					Listenansicht <List className='ml-2' />
				</button>
			</div>
			<div>
				{results.length > 0 && view === 'list' ? (
					<table className='min-w-full rounded-lg table-fixed overflow-hidden text-left'>
						<thead>
							<tr className='bg-gray-200'>
								<th className='px-4 py-2'>Wort</th>
								<th className='px-4'>Übersetzung</th>
								<th className='px-4'>Wortart</th>
								<th className='px-4 text-right w-2/12'></th>
							</tr>
						</thead>
						<tbody>
							{results.map((word, i) => (
								<WordRow key={i} word={word} query={query} />
							))}
						</tbody>
					</table>
				) : (
					<>
						{results.map((word, i) => (
							<WordRow key={i} word={word} query={query} />
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default Page;
