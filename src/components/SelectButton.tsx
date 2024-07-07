import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

type SelectButtonProps = {
	label: string;
	active: boolean;
	handleClick: Dispatch<SetStateAction<any>>;
	className?: React.CSSProperties & string;
};

const SelectButton = ({ label, active, handleClick, className }: SelectButtonProps) => {
	return (
		<button
			onClick={handleClick}
			className={clsx(
				`h-9 p-1 px-3 border rounded-lg shadow ${
					active ? 'text-sky-50 bg-blue-600 border-blue-800' : 'border-gray-400'
				} transition-colors`,
				className
			)}
		>
			{label}
		</button>
	);
};

export default SelectButton;
