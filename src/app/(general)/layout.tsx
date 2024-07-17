import '@/app/globals.css';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div className='container mx-auto max-w-[1024px] pb-16'>{children}</div>
    </div>
  );
};

export default MainLayout;
