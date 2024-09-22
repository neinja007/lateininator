import { Word } from '@/types/word';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { COLORS } from '@/constants/other';

type HighlightedQueryProps = {
  word: Word;
  query: string;
};

export const HighlightedQuery = ({ word, query }: HighlightedQueryProps) => {
  const indexOfQuery = word.name.indexOf(query);
  const primaryColor = usePrimaryColor();

  if (query === '') {
    return word.name;
  }

  if (indexOfQuery === -1) {
    return word.name;
  }

  return (
    <span>
      {word.name.slice(0, indexOfQuery)}
      <span className={COLORS[primaryColor].text}>{query}</span>
      {word.name.slice(indexOfQuery + query.length)}
    </span>
  );
};
