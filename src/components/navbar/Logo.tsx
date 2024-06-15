import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import WideLogo from '../../../public/next.svg';

function Logo() {
	return (
		<Link href={'/'}>
			<span className='h-10 w-auto top-3 start-3 absolute text-4xl'>Lateininator</span>

			{/* <Image className='h-10 w-auto top-3 start-3 absolute' src={WideLogo} alt='Logo Wide' /> */}
		</Link>
	);
}

export default Logo;
