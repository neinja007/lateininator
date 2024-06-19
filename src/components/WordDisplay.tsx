import { Word } from '@/data/types';
import { getLexicalForm } from '@/utils/wordUtils';
import Link from 'next/link';

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
		<tr className='even:bg-gray-200'>
			<td>
				{highlightedWord} <i>{getLexicalForm(word)}</i>
			</td>
			<td>{word.translation?.join(', ')}</td>
			<td className='text-right'>
				<Link href={`/vocabulary/dictionary/${word.id}`} className='text-sky-500 underline'>
					Wort ansehen
				</Link>
			</td>
		</tr>
	);
}

export default WordDisplay;
