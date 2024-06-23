import { Words } from '@/data/types';
import WordRow from './WordRow';

type WordListProps = { results: Words; query: string };

function WordList({ results, query }: WordListProps) {
	return (
		<table className='w-full table-fixed rounded-lg overflow-hidden shadow text-left'>
			<thead>
				<tr className='bg-gray-100'>
					<th className='px-4 py-2'>Wort</th>
					<th className='px-4 py-2'>Übersetzung</th>
					<th className='px-4 py-2'>Wortart</th>
					<th className='px-4 py-2 w-2/12'></th>
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
