import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../public/logo_wide.png';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image className='absolute start-1 top-1 h-14 w-auto' priority src={LogoImage} alt='Logo Wide' />
    </Link>
  );
};

export default Logo;
