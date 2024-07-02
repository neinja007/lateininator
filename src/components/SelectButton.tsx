import { List } from '@/data/types';
import { Dispatch, SetStateAction } from 'react';

type SelectButtonProps = { list: List; active: boolean; handleClick: Dispatch<SetStateAction<List>> };

function SelectButton({ list, active, handleClick }: SelectButtonProps) {
	return (
		<button
			onClick={() => handleClick(list)}
			className={`p-1 px-3 rounded-lg border shadow ${
				active ? 'text-green-700 bg-green-200 border-green-400' : 'text-gray-700 bg-gray-200 border-gray-400'
			}`}
		>
			{list.name}
		</button>
	);
}

export default SelectButton;
