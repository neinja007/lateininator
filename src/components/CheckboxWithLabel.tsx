import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { Dispatch, SetStateAction, useId } from 'react';
import Checkbox from './Checkbox';

type CheckboxWithLabelProps = {
  checked: boolean;
  disabled?: boolean;
  handleChange: Dispatch<SetStateAction<boolean>>;
  label: string;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const CheckboxWithLabel = ({ checked, disabled, handleChange, label }: CheckboxWithLabelProps) => {
  const id = useId();
  const primaryColor = usePrimaryColor();

  return (
    <div>
      <Checkbox
        disabled={disabled}
        id={id}
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
        className='mr-1'
      />
      <label
        htmlFor={id}
        className={
          checked ? COLORS[primaryColor].text : disabled ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500'
        }
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
