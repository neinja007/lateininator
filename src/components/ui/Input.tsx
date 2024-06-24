import { useId } from 'react';

type InputProps = { label?: string; className?: React.CSSProperties } & React.ComponentProps<'input'>;

function Input({ label, className, ...props }: InputProps) {
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
				id={id}
				{...props}
				className={`h-9 p-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700 shadow ${className}`}
			/>
		</div>
	);
}

export default Input;
