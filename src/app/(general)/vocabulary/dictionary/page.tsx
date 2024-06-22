'use client';

import { Words } from '@/data/types';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Header from '@/components/ui/Header';
import { CreditCard, List } from 'react-feather';
import WordList from '@/components/specific/dictionary/WordList';
import WordCards from '@/components/specific/dictionary/WordCards';

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
			<div className='m-2 flex float-end'>
				<button
					className={`flex ${view === 'cards' ? 'text-theme' : 'text-gray-500'}`}
					onClick={() => setView('cards')}
				>
					Kartenansicht <CreditCard className='ml-2 mr-8' />
				</button>
				<button className={`flex ${view === 'list' ? 'text-theme' : 'text-gray-500'}`} onClick={() => setView('list')}>
					Listenansicht <List className='ml-2' />
				</button>
			</div>
			<div>
				{results.length > 0 && view === 'list' ? (
					<WordList results={results} query={query} />
				) : (
					<WordCards results={results} query={query} />
				)}
			</div>
		</div>
	);
}

export default Page;
