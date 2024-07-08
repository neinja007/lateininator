type ButtonProps = { children: React.ReactNode; className?: React.CSSProperties } & Exclude<
	React.ComponentProps<'button'>,
	'className'
>;

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`h-9 p-1 px-3 border border-gray-400 rounded-lg active:border-gray-700 shadow disabled:border-none disabled:bg-gray-200 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
