import clsx from 'clsx';

type HeadingProps = { children: React.ReactNode; className?: React.CSSProperties } & React.ComponentProps<'h1'>;

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 {...props} className={clsx('mb-5 text-center text-3xl font-bold text-blue-500', className)}>
      {children}
    </h1>
  );
};

export default Heading;
