type HeaderProps = {
	className?: React.CSSProperties;
	children: React.ReactNode;
} & React.ComponentProps<'h1'>;

function Header({ children, className, ...props }: HeaderProps) {
	return (
		<h1 {...props} className={`${className} font-bold text-3xl text-theme`}>
			{children}
		</h1>
	);
}

export default Header;
