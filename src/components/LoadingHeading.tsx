import { LoaderPinwheel } from 'lucide-react';

type LoadingHeadingProps = {
  children: string;
};

const LoadingHeading = ({ children }: LoadingHeadingProps) => {
  return (
    <h1 className='mb-4 text-center text-4xl'>
      <span className='inline-block'>
        <LoaderPinwheel className='mr-2 inline-block h-8 w-8 animate-spin align-middle' />
        <span className='align-middle'>{children}</span>
      </span>
    </h1>
  );
};

export default LoadingHeading;
