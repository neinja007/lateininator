import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { Dispatch, SetStateAction, useId, forwardRef } from 'react';

type CheckboxWithLabelProps = {
  checked: boolean;
  disabled?: boolean;
  handleChange?: Dispatch<SetStateAction<boolean>>;
  label: string;
  noGeneratedId?: boolean;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const CheckboxWithLabel = forwardRef<HTMLInputElement, CheckboxWithLabelProps>(
  ({ checked, disabled, handleChange, label, noGeneratedId, ...props }, ref) => {
    const id = useId();

    if ((!props.id && !noGeneratedId) || (props.id && noGeneratedId)) {
      throw new Error('conflicting ids!');
    }

    const dynamicId = noGeneratedId ? props.id : id;

    if (handleChange && props.onChange) {
      throw new Error('conflicting onChange handlers!');
    }

    const primaryColor = usePrimaryColor(true);

    return (
      <div>
        <input
          type='checkbox'
          disabled={disabled}
          style={{ accentColor: COLORS[primaryColor()].hex }}
          id={dynamicId}
          checked={checked}
          onChange={handleChange ? (e) => handleChange(e.target.checked) : props.onChange}
          className='mr-1'
          ref={ref}
          {...props}
        />
        <label
          htmlFor={dynamicId}
          className={
            checked ? COLORS[primaryColor()].text : disabled ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500'
          }
        >
          {label}
        </label>
      </div>
    );
  }
);

CheckboxWithLabel.displayName = 'CheckboxWithLabel';

export default CheckboxWithLabel;
