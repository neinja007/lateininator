import Footer from '@/components/Footer';
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
    </>
  );
};

export default Layout;
