import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';

type ButtonProps = {
  color?: Color;
  children: React.ReactNode;
  className?: string & React.CSSProperties;
  icon?: React.ReactNode;
  disabled?: boolean;
  unstyled?: boolean;
} & Omit<React.ComponentProps<'button'>, 'disabled' | 'className'>;

const Button = ({ color = 'default', children, className, icon, disabled, unstyled, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        !unstyled && ui.basic,
        className,
        'justify-center transition-colors',
        COLORS[color].background,
        disabled && 'disabled:opacity-50'
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
