import { Dispatch, SetStateAction, useId } from 'react';

type InputProps = {
	label?: string;
	handleChange: Dispatch<SetStateAction<any>>;
	className?: React.CSSProperties;
} & Omit<React.ComponentProps<'input'>, 'onChange'>;

function Input({ label, handleChange, className, ...props }: InputProps) {
	const id = useId();

	return (
		<div className='inline'>
			{label && (
				<>
					<label htmlFor={id}>{label}</label>
					<br />
				</>
			)}
			<input
				onChange={handleChange}
				id={id}
				{...props}
				className={`${className} h-9 p-1 px-2 border border-gray-400 rounded-lg shadow focus:outline-none focus:border-gray-700`}
			/>
		</div>
	);
}

export default Input;
