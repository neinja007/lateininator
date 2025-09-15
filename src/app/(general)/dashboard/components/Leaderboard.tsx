import { useLeaderboard } from '@/hooks/database/queries/useLeaderboard';

export const Leaderboard = () => {
  const { data, isLoading, error } = useLeaderboard();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <span className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></span>
      </div>
    );
  }

  if (error) {
    return <div className='py-4 text-center text-red-500'>Fehler beim Laden des Leaderboards.</div>;
  }

  if (!data || data.length === 0) {
    return <div className='py-4 text-center text-gray-500'>Noch keine Einträge im Leaderboard.</div>;
  }

  const medalColors = [
    'bg-yellow-400 text-yellow-900', // Gold
    'bg-gray-300 text-gray-800', // Silver
    'bg-amber-700 text-amber-100' // Bronze
  ];

  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>#</th>
            <th className='px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>Name</th>
            <th className='px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-700'>Punkte</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((user, idx) => (
            <tr
              key={user.id}
              className={`${idx < 3 ? medalColors[idx] + ' font-bold' : idx % 2 === 0 ? 'bg-gray-50' : ''}`}
            >
              <td className='px-4 py-2'>
                {idx < 3 ? (
                  <span className='inline-block h-6 w-6 text-center align-middle'>
                    {idx === 0 && '🥇'}
                    {idx === 1 && '🥈'}
                    {idx === 2 && '🥉'}
                  </span>
                ) : (
                  <span className='inline-block w-6 text-center'>{idx + 1}</span>
                )}
              </td>
              <td className='flex items-center gap-2 px-4 py-2'>
                {user.staff && (
                  <span title='Team' className='font-bold text-blue-500'>
                    ★
                  </span>
                )}
                <span>{user.name}</span>
              </td>
              <td className='px-4 py-2'>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='py-2 text-center text-xs text-gray-400'>Top 10 Nutzer nach Punkten</div>
    </div>
  );
};
