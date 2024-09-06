import Footer from '@/components/Footer';
import Hr from '@/components/Hr';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className='min-h-48 md:min-h-56 lg:min-h-64'>{children}</div>
      <Hr className='my-4' />
      <Footer />
    </>
  );
};

export default Layout;
