import { Dispatch, SetStateAction } from 'react';
import Button from './ui/Button';

type SelectButtonProps = {
	label: string;
	active: boolean;
	handleClick: Dispatch<SetStateAction<any>>;
};

function SelectButton({ label, active, handleClick }: SelectButtonProps) {
	return (
		<Button onClick={handleClick} className={`${active ? 'text-sky-100 bg-blue-600 border-blue-800' : ''}`}>
			{label}
		</Button>
	);
}

export default SelectButton;
