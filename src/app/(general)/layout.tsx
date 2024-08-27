import Footer from '@/components/Footer';
import Hr from '@/components/Hr';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className='container mx-auto max-w-[1024px] pb-16'>
        {children}
        <Hr className='my-4' />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
