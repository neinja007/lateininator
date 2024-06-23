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
			className='cursor-pointer hover:bg-gray-100 border-y'
			onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
		>
			<td className='px-4 p-2'>
				{highlightedWord} <i>{getLexicalForm(word)}</i>
			</td>
			<td className='px-4 p-2'>{word.translation?.join(', ')}</td>
			<td className='px-4 p-2'>
				<TypeIndicator type={word.type} />
			</td>
			<td className='px-4 p-2'>
				<div className='flex float-end'>
					Wort ansehen <ChevronRight size={16} className='m-1' />
				</div>
			</td>
		</tr>
	);
}

export default WordRow;
