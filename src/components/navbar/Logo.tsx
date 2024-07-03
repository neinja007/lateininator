import Link from 'next/link';
import Image from 'next/image';
import WideLogo from '../../../public/logo_wide.png';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image className='h-14 w-auto top-1 start-1 absolute' src={WideLogo} alt='Logo Wide' />
		</Link>
	);
};

export default Logo;
