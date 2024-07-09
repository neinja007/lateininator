'use client';

import { useState } from 'react';
import { useResults } from '@/hooks/useResults';
import Button from '@/components/Button';
import DisplayModeToggle from '@/components/DisplayModeToggle';
import H1 from '@/components/H1';
import { ResultCount } from '@/components/ResultCount';
import WordCards from '@/components/WordCards';
import WordList from '@/components/WordList';
import Input from '@/components/Input';

const Page = () => {
	const [query, setQuery] = useState<string>('');
	const [view, setView] = useState<'cards' | 'list'>('cards');
	const [limitResults, setLimitResults] = useState<boolean>(true);

	const results = useResults(query, limitResults);

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
			<ResultCount count={results.length} query={query} limitResults={limitResults} setLimitResults={setLimitResults} />
			<hr />
			{results.length > 0 && (
				<div>
					<DisplayModeToggle view={view} setView={setView} />
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
