import LinkToSupportEmail from '@/components/LinkToSupportEmail';

type ResultCountProps = {
  count: number;
  query: string;
  isFetched: boolean;
  error: Error | null;
};

export const ResultCount = ({ count, query, isFetched, error }: ResultCountProps) => {
  if (error) {
    return (
      <div className='text-red-500'>
        Ein Fehler ist aufgetreten ({error.name}). Versuchen Sie es später noch einmal, oder kontaktieren Sie unseren{' '}
        <LinkToSupportEmail />.
      </div>
    );
  }
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
