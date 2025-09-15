import { useDbUser } from '@/hooks/database/queries/useDbUser';
import { useLastActive } from '@/hooks/database/queries/useLastActive';
import { useIsDarkTheme } from '@/hooks/useIsDarkTheme';
import { SignedIn } from '@clerk/nextjs';

export const LastActive = () => {
  const { data, isLoading, error } = useLastActive();
  const darkTheme = useIsDarkTheme();
  const { dbUser } = useDbUser();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <span className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></span>
      </div>
    );
  }

  if (error) {
    return <div className='py-4 text-center text-red-500'>Fehler beim Laden der letzten Aktivitäten.</div>;
  }

  if (!data || data.length === 0) {
    return <div className='py-4 text-center text-gray-500'>Noch keine Einträge in der letzten Aktivität.</div>;
  }

  const formatDate = (date: string) => {
    const d = new Date(date);
    const pad = (n: number) => n.toString().padStart(2, '0');
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getFullYear();
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <div className='bg-background mx-auto max-w-md overflow-hidden rounded-xl border border-purple-500 shadow dark:shadow-purple-500'>
      <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-500'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300'>
              Name
            </th>
            <th className='px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300'>
              Letzte Aktivität
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((user, idx) => (
            <tr key={user.id} className={`${idx % 2 === 0 ? 'bg-background dark:bg-gray-800' : ''}`}>
              <td className='flex items-center gap-2 px-4 py-2'>
                {user.staff && (
                  <span className='text-blacks rounded-md bg-red-400 px-2 text-sm font-bold uppercase text-black shadow shadow-sky-500 dark:bg-red-800 dark:text-white'>
                    Admin
                  </span>
                )}
                <span>{user.name}</span>
              </td>
              <td className='px-4 py-2'>{formatDate(user.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='py-2 text-center text-xs text-gray-400'>
        {dbUser?.updatedAt && (
          <SignedIn>
            <span className='font-bold text-purple-400'>
              Deine letzte Aktivität:{' '}
              {typeof dbUser?.updatedAt === 'string'
                ? formatDate(dbUser?.updatedAt)
                : formatDate(dbUser?.updatedAt.toISOString() || '')}
            </span>
          </SignedIn>
        )}
      </div>
    </div>
  );
};
