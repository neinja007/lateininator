import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { Color } from '@/types';
import { COLORS } from '@/constants';

type ButtonProps = {
	color?: Color;
	children: React.ReactNode;
	className?: string & React.CSSProperties;
	handleClick: () => void;
	icon?: React.ReactNode;
} & Exclude<React.ComponentProps<'button'>, 'onClick'>;

const Button = ({ color = 'default', children, className, handleClick, icon, ...props }: ButtonProps) => {
	return (
		<button className={clsx(ui.basic, className, 'justify-center', COLORS[color])} onClick={handleClick} {...props}>
			{children}
		</button>
	);
};

export default Button;
