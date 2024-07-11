import WordRow from '@/app/(general)/vocabulary/dictionary/components/WordRow';
import { Word } from '@/types';
import table from '@/styles/table.module.css';
import clsx from 'clsx';

type WordListProps = { results: Array<Word>; query: string };

const WordList = ({ results, query }: WordListProps) => {
	return (
		<table className={clsx(table.table, 'text-left')}>
			<thead>
				<tr className='bg-gray-100'>
					<th className='px-4 py-2'>Wort</th>
					<th className='px-4 py-2'>Übersetzung</th>
					<th className='px-4 py-2'>Wortart</th>
					<th className='px-4 py-2 w-2/12' />
				</tr>
			</thead>
			<tbody>
				{results.map((word, i) => (
					<WordRow key={i} word={word} query={query} />
				))}
			</tbody>
		</table>
	);
};

export default WordList;
