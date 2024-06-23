import { List } from '@/data/types';
import { Dispatch, SetStateAction } from 'react';

type SelectButtonProps = { list: List; active: boolean; handleClick: Dispatch<SetStateAction<List>> };

function SelectButton({ list, active, handleClick }: SelectButtonProps) {
	return (
		<button
			onClick={() => handleClick(list)}
			className={`p-1 px-2 font-bold rounded-lg border-2 shadow w-1/12 ${
				active ? 'text-blue-600 bg-blue-300 border-blue-500' : 'text-gray-600 bg-gray-300 border-gray-500'
			}`}
		>
			{list.name}
		</button>
	);
}

export default SelectButton;
