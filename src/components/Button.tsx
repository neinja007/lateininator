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
	gray: 'bg-gray-500 text-white border-gray-700 hover:bg-gray-600',
	red: 'bg-red-500 text-white border-red-700 hover:bg-red-600',
	orange: 'bg-orange-500 text-white border-orange-700 hover:bg-orange-600',
	yellow: 'bg-yellow-500 text-white border-yellow-700 hover:bg-yellow-600',
	green: 'bg-green-500 text-white border-green-700 hover:bg-green-600',
	blue: 'bg-blue-500 text-white border-blue-700 hover:bg-blue-600',
	purple: 'bg-purple-500 text-white border-purple-700 hover:bg-purple-600',
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
