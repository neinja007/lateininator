import { Word } from '@/data/types';

type WordDisplayProps = {
	word: Word;
	query?: string;
};

function WordDisplay({ word, query }: WordDisplayProps) {
	let highlightedWord: React.ReactNode = <span>{word.word}</span>;
	if (query !== '' && query) {
		const indexOfQuery = word.word.indexOf(query);
		highlightedWord = (
			<span>
				{word.word.slice(0, indexOfQuery)}
				<b>{query}</b>
				{word.word.slice(indexOfQuery + query.length)}
			</span>
		);
	}

	return <div>{highlightedWord}</div>;
}

export default WordDisplay;
