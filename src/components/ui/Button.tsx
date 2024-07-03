type ButtonProps = { children: React.ReactNode; className?: React.CSSProperties } & React.ComponentProps<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`h-9 p-1 px-3 border border-gray-400 rounded-lg active:border-gray-700 shadow ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
