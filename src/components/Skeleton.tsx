import clsx from 'clsx';

type SkeletonProps = {
  pulse?: boolean;
  className?: string & React.CSSProperties;
  customSize?: boolean;
};

const Skeleton = ({ className, pulse, customSize }: SkeletonProps) => {
  return (
    <div
      className={clsx(
        customSize || 'h-6 w-full',
        'rounded-lg bg-gray-300 dark:bg-gray-700',
        pulse && 'animate-pulse',
        className
      )}
    />
  );
};

export default Skeleton;
