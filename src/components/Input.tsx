import { Dispatch, SetStateAction, useId } from 'react';
import ui from '@/styles/ui.module.css';
import clsx from 'clsx';

type InputProps = {
	label?: string;
	handleChange: Dispatch<SetStateAction<any>>;
	className?: React.CSSProperties;
} & React.ComponentProps<'input'>;

const Input = ({ label, handleChange, className, ...props }: InputProps) => {
	const id = useId();

	return (
		<div className='inline'>
			{label && (
				<>
					<label htmlFor={id}>{label}</label>
					<br />
				</>
			)}
			<input onChange={(e) => handleChange(e.target.value)} id={id} {...props} className={clsx(ui.basic, className)} />
		</div>
	);
};

export default Input;
