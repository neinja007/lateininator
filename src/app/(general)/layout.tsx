'use client';

import Footer from '@/components/Footer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Hr from '@/components/Hr';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Hr className='my-4' />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Layout;
