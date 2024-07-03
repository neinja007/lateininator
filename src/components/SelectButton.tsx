import { Dispatch, SetStateAction } from 'react';
import Button from './ui/Button';

type SelectButtonProps = {
	label: string;
	active: boolean;
	handleClick: Dispatch<SetStateAction<any>>;
};

const SelectButton = ({ label, active, handleClick }: SelectButtonProps) => {
	return (
		<button
			onClick={handleClick}
			className={`h-9 p-1 px-3 border rounded-lg shadow ${
				active ? 'text-sky-100 bg-blue-600 border-blue-800' : 'border-gray-400'
			} transition-colors`}
		>
			{label}
		</button>
	);
};

export default SelectButton;
