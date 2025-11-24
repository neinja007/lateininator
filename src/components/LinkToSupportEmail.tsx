import Link from '@/components/Link';

type LinkToSupportEmailProps = {
  children?: string;
};

const LinkToSupportEmail = ({ children }: LinkToSupportEmailProps) => {
  return <Link href='mailto:lateininator@neinja.dev'>{children ? children : 'Support'}</Link>;
};

export default LinkToSupportEmail;
