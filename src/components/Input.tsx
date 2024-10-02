import { Dispatch, SetStateAction, useId } from 'react';
import ui from '@/styles/ui.module.css';
import clsx from 'clsx';

type InputProps = {
  label?: string;
  handleChange?: Dispatch<SetStateAction<any>>;
  className?: React.CSSProperties;
  unstyled?: boolean;
  useDisabledStyle?: boolean;
} & Omit<React.ComponentProps<'input'>, 'id'>;

const Input = ({ label, handleChange, className, unstyled, useDisabledStyle, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className='inline'>
      {label && (
        <label htmlFor={id} className='block'>
          {label}
        </label>
      )}
      <input
        onChange={handleChange ? (e) => handleChange(e.target.value) : props.onChange}
        id={id}
        {...props}
        className={clsx(
          className,
          !unstyled && ui.basic,
          !unstyled && 'mt-1',
          useDisabledStyle && 'disabled:opacity-50'
        )}
      />
    </div>
  );
};

export default Input;
