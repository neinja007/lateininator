import clsx from 'clsx';
import { Dispatch, SetStateAction, useId } from 'react';
import ui from '@/styles/ui.module.css';

type SelectProps = {
  label?: string;
  options: { [key: string]: string };
  handleChange: Dispatch<SetStateAction<any>>;
  className?: React.CSSProperties;
  appendString?: string;
} & Omit<React.ComponentProps<'select'>, 'onChange'>;

const Select = ({ label, options, handleChange, className, appendString, ...props }: SelectProps) => {
  const id = useId();

  return (
    <div className='inline'>
      {label && (
        <>
          <label htmlFor={id}>{label}</label>
          <br />
        </>
      )}
      <select onChange={(e) => handleChange(e.target.value)} id={id} {...props} className={clsx(ui.basic, className)}>
        <option value={''} hidden>
          {(appendString && '(' + appendString + ')') || 'Auswählen'}
        </option>
        {Object.keys(options).map((key, i) => (
          <option key={i} value={key}>
            {options[key]} {appendString && '(' + appendString + ')'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
