type H1Props = { children: React.ReactNode; className?: React.CSSProperties } & React.ComponentProps<'h1'>;

function H1({ children, className, ...props }: H1Props) {
	return (
		<h1 {...props} className={`text-3xl font-bold ${className}`}>
			{children}
		</h1>
	);
}

export default H1;
