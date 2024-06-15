import React, { useState } from 'react';

type ModalProps = {
	text: string;
};

function Modal({ text }: ModalProps) {
	const [shown, setShown] = useState<boolean>(true);

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' hidden={!shown}>
			<div className='bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 xl:w-1/3'>
				<p className='text-justify'>{text}</p>
				<button onClick={() => setShown(true)}>schließen</button>
			</div>
		</div>
	);
}

export default Modal;
