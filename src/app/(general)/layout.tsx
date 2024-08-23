import '@/app/globals.css';
import Hr from '@/components/Hr';
import Link from 'next/link';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <div className='container mx-auto max-w-[1024px] pb-16'>
        {children}
        <Hr className='my-5' />
        <div className='flex justify-between'>
          <span>&copy; 2024 Anton Siligan</span>
          <div>
            Fehler, Vorschläge, oder Feedback:{' '}
            <Link href={'mailto:support@lateininator.com'} className='text-blue-500 hover:underline'>
              support@lateininator.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
