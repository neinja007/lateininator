import { Dispatch, SetStateAction, useId } from 'react';

type SelectProps = {
	label?: string;
	options: { [key: string]: string };
	handleChange: Dispatch<SetStateAction<any>>;
	className?: React.CSSProperties;
} & Omit<React.ComponentProps<'select'>, 'onChange'>;

function Select({ label, options, handleChange, className, ...props }: SelectProps) {
	const id = useId();

	return (
		<div className='inline'>
			{label && (
				<>
					<label htmlFor={id}>{label}</label>
					<br />
				</>
			)}
			<select
				onChange={(e) => handleChange(e.target.value)}
				id={id}
				{...props}
				className={`${className} h-9 p-1 px-2 shadow border border-gray-400 rounded-lg overflow-ellipsis focus:outline-none focus:border-gray-700`}
			>
				{Object.keys(options).map((key, i) => (
					<option key={i} value={key}>
						{options[key]}
					</option>
				))}
				<option value={''} hidden>
					Auswählen
				</option>
			</select>
		</div>
	);
}

export default Select;
