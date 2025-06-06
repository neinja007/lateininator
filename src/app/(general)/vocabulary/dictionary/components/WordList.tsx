import WordRow from '@/app/(general)/vocabulary/dictionary/components/WordRow';
import table from '@/styles/table.module.css';
import { Word } from '@/types/word';
import clsx from 'clsx';

type WordListProps = { results: Word[]; query: string; loading: boolean };

const WordList = ({ results, query, loading }: WordListProps) => {
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
          <WordRow key={i} word={word} query={query} loading={loading} />
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
