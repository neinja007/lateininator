import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';

type ResultCountProps = {
  count: number;
  query: string;
  isFetched: boolean;
};

export const ResultCount = ({ count, query, isFetched }: ResultCountProps) => {
  const primaryColor = usePrimaryColor();

  if (!isFetched) {
    return <div className='animate-pulse'>Wörter werden geladen...</div>;
  }

  return (
    <div>
      Wir haben{' '}
      <b className={COLORS[primaryColor].text}>
        {count === 0 ? 'Keine' : count} {count === 1 ? 'Ergebnis' : 'Ergebnisse'}
      </b>{' '}
      {query.trim() && 'für'} <b className={COLORS[primaryColor].text}>{query.trim()}</b> gefunden.
    </div>
  );
};
