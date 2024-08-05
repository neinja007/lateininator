import clsx from 'clsx';

type HrProps = {
  className?: string & React.CSSProperties;
} & React.ComponentProps<'hr'>;

const Hr = ({ className, ...props }: HrProps) => {
  return <hr className={clsx(className, 'dark:border-gray-700')} {...props} />;
};

export default Hr;
