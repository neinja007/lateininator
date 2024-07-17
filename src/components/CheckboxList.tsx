import CheckboxWithLabel from './CheckboxWithLabel';
import { Dispatch, SetStateAction } from 'react';

type CheckboxListProps = {
  label: string;
  disabled: boolean;
  options: string[];
  mapper: { [key: string]: string };
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
};

const CheckboxList = ({ label, options, selected, disabled, setSelected, mapper }: CheckboxListProps) => {
  return (
    <div>
      <span className={disabled ? 'text-gray-500' : ''}>{label}</span>:
      {options.map((option) => (
        <CheckboxWithLabel
          key={option}
          disabled={disabled}
          checked={selected.includes(option)}
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
