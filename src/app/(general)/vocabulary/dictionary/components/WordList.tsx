import WordRow from '@/app/(general)/vocabulary/dictionary/components/WordRow';
import { Word } from '@/types';
import table from '@/styles/table.module.css';
import clsx from 'clsx';

type WordListProps = { results: Array<Word>; query: string };

const WordList = ({ results, query }: WordListProps) => {
	return (
		<table className={clsx(table.table, 'text-left')}>
			<thead>
				<tr className={table.tr}>
					<th className={clsx(table.th, '!px-4 !py-2')}>Wort</th>
					<th className={clsx(table.th, '!px-4 !py-2')}>Übersetzung</th>
					<th className={clsx(table.th, '!px-4 !py-2')}>Wortart</th>
					<th className={clsx(table.th, 'w-1/6')} />
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
