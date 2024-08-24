import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { deDE } from '@clerk/localizations';
import { Analytics } from '@vercel/analytics/react';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lateininator',
  description: 'Die #1 Latein-Lern-App'
};
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
            <Navbar />
            {children}
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
