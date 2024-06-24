import { Words } from '@/data/types';
import WordCard from './WordCard';

type WordCardsProps = { results: Words; query: string };

function WordCards({ results, query }: WordCardsProps) {
	return (
		<div className='inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
			{results.map((word, i) => (
				<WordCard key={i} word={word} query={query} />
			))}
		</div>
	);
}

export default WordCards;
