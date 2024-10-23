import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { deDE } from '@clerk/localizations';
import { Analytics } from '@vercel/analytics/react';
import '@/app/globals.css';
import { QueryClientWrapper } from '@/components/QueryClientWrapper';
import Pattern from '@/components/Pattern';
import { SpeedInsights } from '@vercel/speed-insights/next';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s - Lateininator',
    default: 'Lateininator'
  },
  description: 'Die #1 Latein-App zum Latein lernen'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={deDE}>
      <html lang='en'>
        <body className={rubik.className + ' dark:bg-black dark:text-gray-300'}>
          <QueryClientWrapper>
            <Navbar />
            <Pattern>{children}</Pattern>
          </QueryClientWrapper>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
