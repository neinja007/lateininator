import LinkToSupportEmail from './LinkToSupportEmail';

const Footer = () => {
  return (
    <div className='justify-between text-center md:flex'>
      <span>&copy; 2024 Lateininator</span>
      <div className='mt-5 md:mt-0'>
        Fehler, Vorschläge, und Feedback: <LinkToSupportEmail>support@lateininator.com</LinkToSupportEmail>
      </div>
    </div>
  );
};

export default Footer;
