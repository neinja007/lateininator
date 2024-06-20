type HeaderProps = {
	className?: React.CSSProperties;
} & (
	| {
			children?: never;
			label: string;
	  }
	| {
			children: React.ReactNode;
			label?: never;
	  }
) &
	React.ComponentProps<'h1'>;

function Header({ children, className, ...props }: HeaderProps) {
	return (
		<h1 {...props} className={`${className} font-bold text-2xl text-theme`}>
			{children}
		</h1>
	);
}

export default Header;
