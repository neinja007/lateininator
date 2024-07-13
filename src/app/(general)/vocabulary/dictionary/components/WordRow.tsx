'use client';

import { Word } from '@/types';
import Badge from '@/components/Badge';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'react-feather';
import { getLexicalForm } from '@/utils/wordUtils';
import { capitalizeFirstLetter } from '@/utils/inputUtils';

type WordRowProps = {
	word: Word;
	query?: string;
};

const WordRow = ({ word, query }: WordRowProps) => {
	const router = useRouter();

	let highlightedWord: React.ReactNode = <span>{word.word}</span>;
	if (query !== '' && query) {
		const indexOfQuery = word.word.indexOf(query);
		highlightedWord = (
			<span>
				{word.word.slice(0, indexOfQuery)}
				<span className='text-blue-500'>{query}</span>
				{word.word.slice(indexOfQuery + query.length)}
			</span>
		);
	}

	return (
		<tr
			className='select-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 border-t'
			onClick={() => router.push('/vocabulary/dictionary/' + word.id)}
		>
			<td className='px-4 p-2'>
				{highlightedWord} <i>{getLexicalForm(word)}</i>
			</td>
			<td className='px-4 p-2'>
				{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}
			</td>
			<td className='px-4 p-2'>
				<Badge text={word.type} />
			</td>
			<td className='px-4 p-2'>
				<div className='flex float-end'>
					Wort ansehen <ChevronRight size={16} className='m-1' />
				</div>
			</td>
		</tr>
	);
};

export default WordRow;
