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
			<label htmlFor={id} className={checked ? 'text-blue-700' : 'text-gray-600'}>
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
