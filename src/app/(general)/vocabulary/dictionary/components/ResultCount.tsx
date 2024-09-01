type ResultCountProps = {
  count: number;
  query: string;
  isFetched: boolean;
};

export const ResultCount = ({ count, query, isFetched }: ResultCountProps) => {
  if (!isFetched) {
    return <div className='animate-pulse'>Wörter werden geladen...</div>;
  }

  return (
    <div>
      Wir haben{' '}
      <b className='text-blue-500'>
        {count === 0 ? 'Keine' : count} {count === 1 ? 'Ergebnis' : 'Ergebnisse'}
      </b>{' '}
      {query.trim() && 'für'} <b className='text-blue-500'>{query.trim()}</b> gefunden.
    </div>
  );
};
