'use client';

import { Words } from '@/data/types';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';
import { CreditCard, List } from 'react-feather';
import WordList from '@/components/WordList';
import WordCards from '@/components/WordCards';
import H1 from '@/components/ui/H1';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

function Page() {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Words>([]);
	const [view, setView] = useState<'cards' | 'list'>('cards');

	useEffect(() => {
		setResults(words.filter((word) => word.word.includes(query)));
	}, [query]);

	return (
		<div>
			<H1>Wörterbuch</H1>

			<div>
				<Input
					label='Suche:'
					placeholder='Wort oder Übersetzung eingeben'
					className='w-96'
					value={query}
					handleChange={setQuery}
				/>
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
				<div
					className={`flex cursor-pointer ${view === 'cards' ? 'text-black' : 'text-gray-400'}`}
					onClick={() => setView('cards')}
				>
					Kartenansicht <CreditCard className='ml-2 mr-8 rotate-180' />
				</div>
				<div
					className={`flex cursor-pointer ${view === 'list' ? 'text-black' : 'text-gray-400'}`}
					onClick={() => setView('list')}
				>
					Listenansicht <List className='ml-2' />
				</div>
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
