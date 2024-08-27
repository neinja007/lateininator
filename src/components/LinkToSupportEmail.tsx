import Link from 'next/link';

type LinkToSupportEmailProps = {
  children?: string;
};

const LinkToSupportEmail = ({ children }: LinkToSupportEmailProps) => {
  return (
    <Link className='text-blue-500 hover:underline' href={'mailto:support@lateininator.com'}>
      {children ? children : 'Support'}
    </Link>
  );
};

export default LinkToSupportEmail;
