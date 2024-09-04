import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        className='absolute start-1 top-1'
        width={245}
        height={56}
        priority
        src={'/logo_1000x.png'}
        alt='Logo Wide'
      />
    </Link>
  );
};

export default Logo;
