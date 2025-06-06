import WordCard from '@/app/(general)/vocabulary/dictionary/components/WordCard';
import { Word } from '@/types/word';

type WordCardsProps = { results: Word[]; query: string; loading: boolean };

const WordCards = ({ results, query, loading }: WordCardsProps) => {
  return (
    <div className='inline-grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {results.map((word, i) => (
        <WordCard key={i} word={word} query={query} loading={loading} />
      ))}
    </div>
  );
};

export default WordCards;
