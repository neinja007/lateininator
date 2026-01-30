import Link from './Link';
import LinkToSupportEmail from './LinkToSupportEmail';

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='justify-between text-center md:flex'>
        <span>
          &copy; {new Date().getFullYear()} Lateininator (von <Link href='https://neinja.dev'>neinja.dev</Link>)
        </span>
        <div className='mt-5 md:mt-0'>
          Fehler, Vorschläge, und Feedback: <LinkToSupportEmail>support@lateininator.com</LinkToSupportEmail>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-4'>
        <Link href='/impressum'>Impressum</Link>
        <Link href='/privacy-policy/de'>Datenschutzerklärung</Link>
        <Link href='/terms-of-service'>Nutzungsbedingungen</Link>
      </div>
    </div>
  );
};

export default Footer;
