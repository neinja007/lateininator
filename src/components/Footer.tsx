import Link from './Link';
import LinkToSupportEmail from './LinkToSupportEmail';

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-0'>
      <div className='justify-between text-center md:flex'>
        <span>
          &copy; {new Date().getFullYear()} Lateininator (von <Link href='https://neinja.dev'>neinja.dev</Link>)
        </span>
        <div className='mt-5 md:mt-0'>
          Fehler, Vorschläge, und Feedback: <LinkToSupportEmail>support@lateininator.com</LinkToSupportEmail>
        </div>
      </div>
      <div className='flex flex-col justify-between gap-4 md:flex-row'>
        <div className='flex flex-col items-center md:flex-row md:gap-4'>
          <Link href='/impressum'>Impressum</Link>
          <Link href='/privacy-policy/de'>Datenschutzerklärung</Link>
          <Link href='/terms-of-service/de'>Nutzungsbedingungen</Link>
        </div>
        <div className='text-center md:text-left'>
          Der Lateininator ist <Link href='https://github.com/neinja007/lateininator'>Open-Source</Link>!
        </div>
      </div>
    </div>
  );
};

export default Footer;
