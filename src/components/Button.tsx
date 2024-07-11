import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type ButtonProps = {
	children: React.ReactNode;
	className?: string & React.CSSProperties;
	icon?: React.ReactNode;
} & Exclude<React.ComponentProps<'button'>, 'className'>;

const Button = ({ children, className, icon, ...props }: ButtonProps) => {
	return (
		<button {...props} className={clsx(ui.basic, className)}>
			{children}
		</button>
	);
};

export default Button;
