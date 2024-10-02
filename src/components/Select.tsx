import clsx from 'clsx';
import { Dispatch, SetStateAction, useId } from 'react';
import ui from '@/styles/ui.module.css';

type SelectProps = {
  label?: string;
  options: { [key: string]: string } | string[];
  handleChange?: Dispatch<SetStateAction<any>>;
  className?: React.CSSProperties;
  appendString?: string;
  disabled?: boolean;
  disabledStyle?: boolean;
} & Omit<React.ComponentProps<'select'>, 'onChange' | 'disabled'>;

const Select = ({
  label,
  options,
  handleChange,
  className,
  appendString,
  disabled,
  disabledStyle,
  ...props
}: SelectProps) => {
  const id = useId();
  options = Array.isArray(options)
    ? options.reduce((acc: { [key: string]: string }, curr) => {
        acc[curr] = curr;
        return acc;
      }, {})
    : options;

  return (
    <div className='inline'>
      {label && (
        <label htmlFor={id} className='block'>
          {label}
        </label>
      )}
      <select
        onChange={handleChange && ((e) => handleChange(e.target.value))}
        id={id}
        {...props}
        disabled={disabled}
        className={clsx(ui.basic, className, 'mt-1', disabledStyle && disabled && 'disabled:opacity-50')}
      >
        <option value={''} hidden>
          {appendString || 'Auswählen'}
        </option>
        {Object.keys(options).map((key, i) => (
          <option key={i} value={key}>
            {(appendString && appendString + ' (' + options[key] + ')') || options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
