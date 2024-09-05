import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { deDE } from '@clerk/localizations';
import { Analytics } from '@vercel/analytics/react';
import '@/app/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lateininator',
  description: 'Die #1 Latein-Lern-App'
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider localization={deDE}>
      <html lang='en'>
        <body className={rubik.className + ' dark:bg-black dark:text-gray-300'}>
          <div className='min-h-screen px-4 pt-24'>
            <QueryClientProvider client={queryClient}>
              <Navbar />
              <div className='container mx-auto max-w-[1024px] pb-16'>{children}</div>
            </QueryClientProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
