import { words } from '@/data/words';
import { Word } from '@/types';
import { useEffect, useState } from 'react';

export const useResults = (query: string, limited: boolean): Word[] => {
	const [results, setResults] = useState<Word[]>([]);

	useEffect(() => {
		const limitedResults = [];
		const limit = limited ? 30 : words.length;
		for (let i = 0; i < words.length && limitedResults.length < limit; i++) {
			if (words[i].word.includes(query)) {
				limitedResults.push(words[i]);
			}
		}
		setResults(limitedResults);
	}, [limited, query]);

	return results;
};
