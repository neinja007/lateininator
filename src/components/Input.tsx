import { Dispatch, SetStateAction, useId } from 'react';
import ui from '@/styles/ui.module.css';
import clsx from 'clsx';

type InputProps = {
	label?: string;
	onChange: Dispatch<SetStateAction<any>>;
	className?: React.CSSProperties;
	unstyled?: boolean;
} & Omit<React.ComponentProps<'input'>, 'onChange'>;

const Input = ({ label, onChange, className, unstyled, ...props }: InputProps) => {
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
				onChange={(e) => onChange(e.target.value)}
				id={id}
				{...props}
				className={clsx(className, !unstyled && ui.basic)}
			/>
		</div>
	);
};

export default Input;
