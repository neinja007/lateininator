import { Dispatch, SetStateAction } from 'react';
import Button from './Button';

type SelectButtonProps = {
  label: string;
  active: boolean;
  handleClick: Dispatch<SetStateAction<any>>;
  className?: React.CSSProperties & string;
};

const SelectButton = ({ label, active, handleClick, className }: SelectButtonProps) => {
  return (
    <Button onClick={handleClick} className={className} color={active ? 'blue' : 'default'}>
      {label}
    </Button>
  );
};

export default SelectButton;
