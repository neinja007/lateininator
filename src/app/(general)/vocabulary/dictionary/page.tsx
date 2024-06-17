'use client';

import { Words } from '@/data/types';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';
import WordDisplay from '@/components/ui/WordDisplay';

function Page() {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Words>([]);

	useEffect(() => {
		setResults(words.filter((word) => word.word.includes(query)));
	}, [query]);

	return (
		<div>
			<h1>Wörterbuch</h1>

			<div>
				Suche: <input placeholder='schola' value={query} onChange={(e) => setQuery(e.target.value)} />
				<button className='ml-4'>Erweiterte Suche</button>
			</div>
			<div>
				Wir haben{' '}
				<b>
					{results.length} {results.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
				</b>{' '}
				gefunden.
			</div>
			<div>
				{results.map((word, i) => (
					<WordDisplay key={i} word={word} query={query} />
				))}
			</div>
		</div>
	);
}

export default Page;
