import Link from '@/components/Link';

type LinkToSupportEmailProps = {
  children?: string;
};

const LinkToSupportEmail = ({ children }: LinkToSupportEmailProps) => {
  return <Link href='mailto:support@lateininator.com'>{children ? children : 'Support'}</Link>;
};

export default LinkToSupportEmail;
