import clsx from 'clsx';
import { Check, LoaderPinwheel } from 'lucide-react';

type LoadingHeadingProps = {
  children: React.ReactNode;
  done?: boolean;
};

const LoadingHeading = ({ children, done }: LoadingHeadingProps) => {
  return (
    <h1 className={clsx('mb-4 text-center text-4xl', done && 'animate-pulse')}>
      <span className='inline-block'>
        {done ? (
          <Check className='mr-3 h-8 w-8' />
        ) : (
          <LoaderPinwheel className='mr-2 inline-block h-8 w-8 animate-spin align-middle' />
        )}
        <span className='align-middle'>{children}</span>
      </span>
    </h1>
  );
};

export default LoadingHeading;
