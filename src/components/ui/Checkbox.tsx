import { Dispatch, SetStateAction, useId } from 'react';

type CheckboxProps = {
	checked: boolean;
	disabled?: boolean;
	handleChange: Dispatch<SetStateAction<boolean>>;
	label: string;
};

const Checkbox = ({ checked, disabled, handleChange, label }: CheckboxProps) => {
	const id = useId();

	return (
		<div>
			<input
				disabled={disabled}
				id={id}
				type='checkbox'
				checked={checked}
				onChange={(e) => handleChange(e.target.checked)}
				className='mr-1'
			/>
			<label htmlFor={id} className={checked ? 'text-blue-700' : disabled ? 'text-gray-400' : 'text-gray-500'}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
