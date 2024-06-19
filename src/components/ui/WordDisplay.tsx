import { Word } from '@/data/types';
import { getLexicalForm } from '@/utils/wordUtils';

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

	return (
		<div>
			{highlightedWord} <i>{getLexicalForm(word)}</i>
		</div>
	);
}

export default WordDisplay;
