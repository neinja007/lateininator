type ButtonProps = ({ label?: never; children: React.ReactNode } | { label: React.ReactNode; children?: never }) &
	React.ComponentProps<'button'>;

function Button({ label, children, className, ...restProps }: ButtonProps) {
	const content = label !== '' ? label : children;
	return (
		<button {...restProps} className={`${className ? className : ''} button`}>
			{content}
		</button>
	);
}

export default Button;
