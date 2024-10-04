import Button from './Button';

type ContinueButtonProps = {
  handleContinue: () => void;
  enableStart: boolean;
};

const ContinueButton = ({ enableStart, handleContinue }: ContinueButtonProps) => {
  return (
    <Button
      onClick={() => handleContinue()}
      className='w-full'
      disabled={!enableStart}
      color={enableStart ? 'primary' : 'gray'}
    >
      <span>{!enableStart ? 'Überprüfen Sie bitte die Einstellungen' : 'Weiter'}</span>
    </Button>
  );
};

export default ContinueButton;
