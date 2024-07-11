import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type ButtonProps = {
	color?: 'blue' | 'default';
	children: React.ReactNode;
	className?: string & React.CSSProperties;
	icon?: React.ReactNode;
} & Exclude<React.ComponentProps<'button'>, 'className'>;

const COLORS = {
	blue: 'bg-blue-500 text-white border-blue-700 hover:bg-blue-600',
	default: 'bg-white text-black border-gray-500 hover:bg-gray-100'
};

const Button = ({ color = 'default', children, className, icon, ...props }: ButtonProps) => {
	return (
		<button className={clsx(ui.basic, className, 'justify-center', COLORS[color])} {...props}>
			{children}
		</button>
	);
};

export default Button;
