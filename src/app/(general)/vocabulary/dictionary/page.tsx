'use client';

import { Words } from '@/data/words';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';

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
				Suche: <input placeholder='Suche nach Wörtern...' value={query} onChange={(e) => setQuery(e.target.value)} />
			</div>
			<div>
				Ihre Suche hat{' '}
				<b>
					{results.length} {results.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
				</b>{' '}
				ergeben.
			</div>
			<div>
				{results.map((word) => (
					<div>{word.word}</div>
				))}
			</div>
		</div>
	);
}

export default Page;
