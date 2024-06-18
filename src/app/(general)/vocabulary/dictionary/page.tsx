'use client';

import { Words } from '@/data/types';
import { useEffect, useState } from 'react';
import { words } from '@/data/words';
import WordDisplay from '@/components/ui/WordDisplay';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Header from '@/components/ui/Header';

function Page() {
	const [query, setQuery] = useState<string>('');
	const [results, setResults] = useState<Words>([]);

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
