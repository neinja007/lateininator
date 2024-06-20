import { Word } from '@/data/types';
import { getLexicalForm } from '@/utils/wordUtils';
import { useRouter } from 'next/navigation';

type WordDisplayProps = {
	word: Word;
	query?: string;
};

function WordDisplay({ word, query }: WordDisplayProps) {
	let highlightedWord: React.ReactNode = <span>{word.word}</span>;

	const router = useRouter();

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
		<tr
			className='even:bg-gray-200 cursor-pointer hover:bg-gray-100 *:pl-4 *:p-2'
			onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
		>
			<td>
				{highlightedWord} <i>{getLexicalForm(word)}</i>
			</td>
			<td>{word.translation?.join(', ')}</td>
			<td className='inline-flex float-end'>
				Wort ansehen
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -2 20 20' fill='currentColor' className='size-5'>
					<path
						fillRule='evenodd'
						d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
						clipRule='evenodd'
					/>
				</svg>
			</td>
		</tr>
	);
}

export default WordDisplay;
