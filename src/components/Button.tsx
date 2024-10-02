import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';

type ButtonProps = {
  color?: Color | 'primary';
  children: React.ReactNode;
  className?: string & React.CSSProperties;
  icon?: React.ReactNode;
  disabled?: boolean;
  unstyled?: boolean;
} & Omit<React.ComponentProps<'button'>, 'disabled' | 'className'>;

const Button = ({ color = 'default', children, className, icon, disabled, unstyled, ...props }: ButtonProps) => {
  const primaryColor = usePrimaryColor();

  const newColor = color === 'primary' ? primaryColor : color;

  return (
    <button
      type={props.type || 'button'}
      className={clsx(
        !unstyled && ui.basic,
        className,
        'justify-center transition-colors',
        COLORS[newColor].dynamic,
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
