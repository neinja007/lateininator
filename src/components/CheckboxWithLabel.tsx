import { Dispatch, SetStateAction, useId } from 'react';

type CheckboxWithLabelProps = {
	checked: boolean;
	disabled?: boolean;
	handleChange: Dispatch<SetStateAction<boolean>>;
	label: string;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const CheckboxWithLabel = ({ checked, disabled, handleChange, label }: CheckboxWithLabelProps) => {
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

export default CheckboxWithLabel;
