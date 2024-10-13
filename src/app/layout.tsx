import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { deDE } from '@clerk/localizations';
import { Analytics } from '@vercel/analytics/react';
import '@/app/globals.css';
import { QueryClientWrapper } from '@/components/QueryClientWrapper';
import Pattern from '@/components/Pattern';

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
            <Pattern>
              <Navbar />
              <div className='container mx-auto max-w-[1024px] pb-16'>
                <div className='rounded-lg bg-white dark:bg-black'>{children}</div>
              </div>
            </Pattern>
          </QueryClientWrapper>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
