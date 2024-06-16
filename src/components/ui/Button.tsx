type ButtonProps = { children: React.PropsWithChildren } & React.ComponentProps<'button'>;

function Button({ children, className, ...restProps }: ButtonProps) {
	return (
		<button {...restProps} className={`${className ? className : ''} button`}>
			{children}
		</button>
	);
}

export default Button;
