import CheckboxWithLabel from './CheckboxWithLabel';
import { Dispatch, SetStateAction } from 'react';

type CheckboxListProps = {
  label: string;
  disabled?: boolean;
  disabledOptions?: string[];
  options: string[];
  mapper: { [key: string]: string };
  selected: string[];
  setSelected: Dispatch<SetStateAction<any[]>>;
};

const CheckboxList = ({
  label,
  options,
  selected,
  disabled,
  setSelected,
  mapper,
  disabledOptions
}: CheckboxListProps) => {
  return (
    <div>
      <span className={disabled ? 'text-gray-500' : ''}>{label}:</span>
      {options.map((option) => (
        <CheckboxWithLabel
          key={option}
          disabled={disabled || disabledOptions?.includes(option)}
          checked={selected.includes(option) && !disabledOptions?.includes(option)}
          handleChange={(checked) =>
            setSelected((prev) => (checked ? [...prev, option] : prev.filter((p) => p !== option)))
          }
          label={mapper[option]}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
