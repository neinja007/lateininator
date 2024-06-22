import { Word } from '@/data/types';
import { getLexicalForm } from '@/utils/wordUtils';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';
import TypeIndicator from './TypeIndicator';

type WordRowProps = {
	word: Word;
	query?: string;
};

function WordRow({ word, query }: WordRowProps) {
	const router = useRouter();

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
		<tr
			className='even:bg-gray-200 cursor-pointer hover:bg-gray-100 *:pl-4 *:p-2'
			onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
		>
			<td>
				{highlightedWord} <i>{getLexicalForm(word)}</i>
			</td>
			<td>{word.translation?.join(', ')}</td>
			<td>
				<TypeIndicator type={word.type} />
			</td>
			<td className='flex float-right'>
				Wort ansehen <ChevronRight size={16} className='m-1' />
			</td>
		</tr>
	);
}

export default WordRow;
