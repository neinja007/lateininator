import { mapper } from '@/data/mapper';
import { Word } from '@/data/types';
import { getLexicalForm } from '@/utils/wordUtils';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';

type WordRowProps = {
	word: Word;
	query?: string;
};

function WordRow({ word, query }: WordRowProps) {
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
			<td>
				<span
					className={`px-2 text-md font-medium rounded-full ${
						word.type === 'verb'
							? 'bg-red-300 text-red-800'
							: word.type === 'noun'
							  ? 'bg-blue-300 text-blue-800'
							  : word.type === 'adjective'
							    ? 'bg-green-300 text-green-800'
							    : 'bg-gray-300 text-gray-800'
					}`}
				>
					{mapper.type[word.type]}
				</span>
			</td>
			<td className='float-end'>
				Wort ansehen <ChevronRight size={16} className='inline' />
			</td>
		</tr>
	);
}

export default WordRow;
