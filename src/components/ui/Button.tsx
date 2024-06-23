type ButtonProps = {
	children: React.ReactNode;
	className?: React.CSSProperties;
} & React.ComponentProps<'button'>;

function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			className={`${className} p-1 px-3 bg-theme hover:bg-theme-subtle active:border-theme text-white`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
