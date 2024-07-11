import clsx from 'clsx';
import ui from '@/styles/ui.module.css';

type ButtonProps = {
	color?: Color;
	children: React.ReactNode;
	className?: string & React.CSSProperties;
	icon?: React.ReactNode;
} & Exclude<React.ComponentProps<'button'>, 'className'>;

type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'default';

const COLORS: { [C in Color]: React.CSSProperties & string } = {
	gray: 'bg-gray-500 text-white border-none hover:bg-gray-400',
	red: 'bg-red-500 text-white border-none hover:bg-red-400',
	orange: 'bg-orange-500 text-white border-none hover:bg-orange-400',
	yellow: 'bg-yellow-500 text-white border-none hover:bg-yellow-400',
	green: 'bg-green-500 text-white border-none hover:bg-green-400',
	blue: 'bg-blue-500 text-white border-none hover:bg-blue-400',
	purple: 'bg-purple-500 text-white border-none hover:bg-purple-400',
	default: 'bg-white text-black hover:bg-gray-100'
};

const Button = ({ color = 'default', children, className, icon, ...props }: ButtonProps) => {
	return (
		<button className={clsx(ui.basic, className, 'justify-center', COLORS[color])} {...props}>
			{children}
		</button>
	);
};

export default Button;
