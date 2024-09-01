type ResultCountProps = {
  count: number;
  query: string;
};

export const ResultCount = ({ count, query }: ResultCountProps) => {
  return (
    <div className='inline-block'>
      Wir haben{' '}
      <b className='text-blue-500'>
        {count} {count === 1 ? 'Ergebnis' : 'Ergebnisse'}
      </b>{' '}
      {query.trim() && 'für'} <i className='text-blue-500'>{query.trim()}</i> gefunden.
    </div>
  );
};
