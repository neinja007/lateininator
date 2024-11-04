import { clsx } from 'clsx';
import ui from '@/styles/ui.module.css';
import { useId, forwardRef } from 'react';

type TextareaProps = {
  value?: string;
  handleChange?: (description: string) => void;
  label?: string;
  className?: React.CSSProperties;
  useDisabledStyle?: boolean;
  noGeneratedId?: boolean;
} & Omit<React.ComponentProps<'textarea'>, 'value'>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ value, handleChange, label, className, noGeneratedId, useDisabledStyle, ...props }: TextareaProps, ref) => {
    const id = useId();

    if ((noGeneratedId && !props.id) || (!noGeneratedId && props.id)) {
      throw new Error('conflicting ids!');
    }

    if (handleChange && props.onChange) {
      throw new Error('conflicting onChange handlers!');
    }

    const dynamicId = noGeneratedId ? props.id : id;

    return (
      <div className='inline'>
        {label && (
          <label htmlFor={dynamicId} className='block'>
            {label}
          </label>
        )}
        <textarea
          id={dynamicId}
          className={clsx(ui.shape, 'mt-1 h-24 w-full', useDisabledStyle && 'disabled:opacity-50')}
          value={value}
          onChange={handleChange ? (e) => handleChange(e.target.value) : props.onChange}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
