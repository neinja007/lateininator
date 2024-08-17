import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { Color } from '@/types';
import { COLORS } from '@/constants';

type ButtonProps = {
  color?: Color;
  children: React.ReactNode;
  className?: string & React.CSSProperties;
  icon?: React.ReactNode;
} & React.ComponentProps<'button'>;

const Button = ({ color = 'default', children, className, icon, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(ui.basic, className, 'justify-center', COLORS[color], props.disabled && 'disabled:opacity-50')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
