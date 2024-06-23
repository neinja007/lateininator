type InputProps = {
	className?: React.CSSProperties;
} & React.ComponentProps<'input'>;

function Input({ className, ...props }: InputProps) {
	return (
		<input
			className={`${className} p-1 px-2 bg-white border border-gray-400 focus:outline-none focus:border-theme`}
			{...props}
		/>
	);
}

export default Input;
