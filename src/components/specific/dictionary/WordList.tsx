import { Words } from '@/data/types';
import WordRow from './WordRow';

type WordListProps = { results: Words; query: string };

function WordList({ results, query }: WordListProps) {
	return (
		<table className='min-w-full table-fixed overflow-hidden text-left'>
			<thead>
				<tr className='bg-gray-200'>
					<th className='px-4 py-2'>Wort</th>
					<th className='px-4'>Übersetzung</th>
					<th className='px-4'>Wortart</th>
					<th className='px-4 text-right w-2/12'></th>
				</tr>
			</thead>
			<tbody>
				{results.map((word, i) => (
					<WordRow key={i} word={word} query={query} />
				))}
			</tbody>
		</table>
	);
}

export default WordList;
