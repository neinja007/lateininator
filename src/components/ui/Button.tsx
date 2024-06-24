type ButtonProps = { children: React.ReactNode; className?: React.CSSProperties } & React.ComponentProps<'button'>;

function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={`p-1 px-3 border border-gray-400 rounded-lg active:border-gray-700 shadow ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
