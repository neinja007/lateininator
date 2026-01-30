import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { deDE } from '@clerk/localizations';
import { Analytics } from '@vercel/analytics/react';
import '@/app/globals.css';
import { QueryClientWrapper } from '@/components/QueryClientWrapper';
import Pattern from '@/components/Pattern';
import { SpeedInsights } from '@vercel/speed-insights/next';

const rubik = localFont({
  src: [
    {
      path: '../../public/font/Rubik-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../../public/font/Rubik-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic'
    }
  ],
  variable: '--font-rubik',
  display: 'swap'
});

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
