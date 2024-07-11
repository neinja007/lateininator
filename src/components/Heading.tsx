import clsx from 'clsx';

type HeadingProps = { children: React.ReactNode; className?: React.CSSProperties } & React.ComponentProps<'h1'>;

const Heading = ({ children, className, ...props }: HeadingProps) => {
	return (
		<h1 {...props} className={clsx('text-3xl text-center font-bold text-blue-700', className)}>
			{children}
		</h1>
	);
};

export default Heading;
