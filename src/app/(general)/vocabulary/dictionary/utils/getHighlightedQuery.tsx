import { Word } from '@/types/word';

export const getHighlightedQuery = (word: Word, query: string) => {
  const indexOfQuery = word.name.indexOf(query);

  if (query === '') {
    return word.name;
  }

  if (indexOfQuery === -1) {
    throw new Error('Query not found in word');
  }

  return (
    <span>
      {word.name.slice(0, indexOfQuery)}
      <span className='text-blue-500'>{query}</span>
      {word.name.slice(indexOfQuery + query.length)}
    </span>
  );
};
