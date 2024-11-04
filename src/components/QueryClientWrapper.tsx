'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

export const QueryClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000
          }
        }
      })
  );

  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: window.localStorage
    });

    persistQueryClient({
      queryClient,
      persister
    });
  }, [queryClient]);

  queryClient.setQueryDefaults(['dbUser'], {
    staleTime: 0
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
