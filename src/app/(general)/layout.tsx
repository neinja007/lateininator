import '@/app/globals.css';
import Footer from '@/components/Footer';
import Hr from '@/components/Hr';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
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

export default MainLayout;
