type InputProps = { className?: React.CSSProperties } & React.ComponentProps<'input'>;

function Input({ className, ...props }: InputProps) {
	return (
		<input
			{...props}
			className={`p-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700 ${className}`}
		/>
	);
}

export default Input;
