import '@/app/globals.css';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div className='container mx-auto max-w-[1024px] pb-16'>
        {children}
        {/* <Hr className='my-5' />
        <div className='grid grid-cols-5'>
          <span className='col-span-2'>&copy; 2024 Anton Siligan</span>
          <div className='text-center text-red-500 underline'>Fehler melden</div>
        </div> */}
      </div>
    </div>
  );
};

export default MainLayout;
