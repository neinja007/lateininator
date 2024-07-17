import { Word } from '@/types';
import WordCard from '@/app/(general)/vocabulary/dictionary/components/WordCard';

type WordCardsProps = { results: Array<Word>; query: string };

const WordCards = ({ results, query }: WordCardsProps) => {
  return (
    <div className='inline-grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {results.map((word, i) => (
        <WordCard key={i} word={word} query={query} />
      ))}
    </div>
  );
};

export default WordCards;
