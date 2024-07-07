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

const Page = () => {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Words>([]);
	const [view, setView] = useState<'cards' | 'list'>('cards');
	const [limitResults, setLimitResults] = useState<boolean>(true);

	useEffect(() => {
		const limitedResults = [];
		const limit = limitResults ? 30 : words.length;
		for (let i = 0; i < words.length && limitedResults.length < limit; i++) {
			if (words[i].word.includes(query)) {
				limitedResults.push(words[i]);
			}
		}
		setResults(limitedResults);
	}, [limitResults, query]);

	return (
		<div className='space-y-5'>
			<H1>Wörterbuch</H1>

			<div>
				<Input
					label='Suche:'
					placeholder='Wort oder Übersetzung eingeben'
					className='w-full max-w-96 mr-4'
					value={query}
					handleChange={setQuery}
				/>
				<Button className=''>Erweiterte Suche</Button>
			</div>

			<div className='inline-block'>
				Wir haben{' '}
				<b className='text-blue-700'>
					{results.length === 30 ? 'mindestens 30' : results.length} {results.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
				</b>{' '}
				gefunden.{' '}
				<button className='text-blue-700 underline' onClick={() => setLimitResults(!limitResults)}>
					{limitResults ? 'Alle Ergebnisse anzeigen' : 'Ergebnisse auf 30 beschränken'}
				</button>
			</div>
			{results.length > 0 && (
				<div>
					<div className='m-2 flex float-end mb-4'>
						<div
							className={`flex cursor-pointer ${view === 'cards' ? 'text-blue-700' : 'text-gray-400'}`}
							onClick={() => setView('cards')}
						>
							Kartenansicht{' '}
							<div className='relative z-0'>
								<CreditCard className='ml-2 mr-8 rotate-180' />
							</div>
						</div>
						<div
							className={`flex cursor-pointer ${view === 'list' ? 'text-blue-700' : 'text-gray-400'}`}
							onClick={() => setView('list')}
						>
							Listenansicht <List className='ml-2' />
						</div>
					</div>
					{view === 'list' ? (
						<WordList results={results} query={query} />
					) : (
						<WordCards results={results} query={query} />
					)}
				</div>
			)}
		</div>
	);
};

export default Page;
