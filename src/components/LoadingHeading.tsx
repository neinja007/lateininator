import { LoaderPinwheel } from 'lucide-react';

type LoadingHeadingProps = {
  children: string;
};

const LoadingHeading = ({ children }: LoadingHeadingProps) => {
  return (
    <h1 className='mb-4 flex animate-pulse items-center justify-center text-4xl'>
      <LoaderPinwheel className='mr-3 h-8 w-8 animate-spin' /> {children}
    </h1>
  );
};

export default LoadingHeading;
