import clsx from 'clsx';
import { Dispatch, SetStateAction, useId, forwardRef } from 'react';
import ui from '@/styles/ui.module.css';

type SelectProps = {
  label?: string;
  options: { [key: string]: string } | string[];
  handleChange?: Dispatch<SetStateAction<any>>;
  className?: React.CSSProperties;
  appendString?: string;
  disabled?: boolean;
  disabledStyle?: boolean;
  noGeneratedId?: boolean;
} & Omit<React.ComponentProps<'select'>, 'disabled'>;
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      handleChange,
      className,
      appendString,
      disabled,
      disabledStyle,
      noGeneratedId,
      ...props
    }: SelectProps,
    ref
  ) => {
    const id = useId();

    if ((noGeneratedId && !props.id) || (!noGeneratedId && props.id)) {
      throw new Error('conflicting ids!');
    }

    if (handleChange && props.onChange) {
      throw new Error('conflicting onChange handlers!');
    }

    const dynamicId = noGeneratedId ? props.id : id;

    options = Array.isArray(options)
      ? options.reduce((acc: { [key: string]: string }, curr) => {
          acc[curr] = curr;
          return acc;
        }, {})
      : options;

    return (
      <div className='inline'>
        {label && (
          <label htmlFor={dynamicId} className='block'>
            {label}
          </label>
        )}
        <select
          onChange={handleChange ? (e) => handleChange(e.target.value) : props.onChange}
          id={dynamicId}
          disabled={disabled}
          className={clsx(ui.basic, className, 'mt-1', disabledStyle && disabled && 'disabled:opacity-50')}
          {...props}
          ref={ref}
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
  }
);

Select.displayName = 'Select';

export default Select;
