import { Dispatch, SetStateAction, useId, forwardRef } from 'react';
import ui from '@/styles/ui.module.css';
import clsx from 'clsx';

type InputProps = {
  label?: string;
  handleChange?: Dispatch<SetStateAction<any>>;
  unstyled?: boolean;
  className?: React.CSSProperties;
  useDisabledStyle?: boolean;
  noGeneratedId?: boolean;
} & React.ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, handleChange, className, unstyled, useDisabledStyle, noGeneratedId, ...props }, ref) => {
    const id = useId();

    if ((noGeneratedId && !props.id) || (!noGeneratedId && props.id)) {
      throw new Error('conflicting ids!');
    }

    const dynamicId = noGeneratedId ? props.id : id;

    return (
      <div className='inline'>
        {label && (
          <label htmlFor={dynamicId} className='block'>
            {label}
          </label>
        )}
        <input
          ref={ref}
          onChange={handleChange ? (e) => handleChange(e.target.value) : props.onChange}
          id={dynamicId}
          className={clsx(
            className,
            !unstyled && ui.basic,
            !unstyled && 'mt-1',
            useDisabledStyle && 'disabled:opacity-50'
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
