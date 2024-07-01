import { Dispatch, SetStateAction, useId } from 'react';

type CheckboxProps = { checked: boolean; handleChange: Dispatch<SetStateAction<boolean>>; label: string };

function Checkbox({ checked, handleChange, label }: CheckboxProps) {
	const id = useId();

	return (
		<div>
			<input
				id={id}
				type='checkbox'
				checked={checked}
				onChange={(e) => handleChange(e.target.checked)}
				className='mr-1'
			/>
			<label htmlFor={id} className={checked ? 'text-black' : 'text-gray-500'}>
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
