import Link from 'next/link';

const Footer = () => {
  return (
    <div className='justify-between text-center md:flex'>
      <span>&copy; 2024 Anton Siligan</span>
      <div className='mt-5 md:mt-0'>
        Fehler, Vorschläge, oder Feedback:{' '}
        <Link href={'mailto:support@lateininator.com'} className='text-blue-500 hover:underline'>
          support@lateininator.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
