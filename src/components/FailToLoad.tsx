import LinkToSupportEmail from './LinkToSupportEmail';

const FailToLoad = () => {
  return (
    <p className='text-yellow-500'>
      Es ist ein Fehler beim Laden aufgetreten. Versuchen Sie es bitte später noch einmal. Sollte dies öfter auftreten,
      so kontaktieren Sie bitte unseren <LinkToSupportEmail />.
    </p>
  );
};

export default FailToLoad;
