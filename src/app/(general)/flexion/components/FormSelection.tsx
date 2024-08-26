import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';

type FormSelectionProps = {
  titleOption?: {
    checked: boolean;
    handleChange: () => void;
    disabled: boolean;
    label: string;
  };
  selectAllActive: boolean;
  selectAll: () => void;
  selectNoneActive: boolean;
  selectNone: () => void;
  children: React.ReactNode;
};

const FormSelection = ({
  selectAll,
  selectAllActive,
  selectNone,
  selectNoneActive,
  titleOption,
  children
}: FormSelectionProps) => {
  return (
    <>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3'>
        <p>Wähle aus, was abgefragt werden soll:</p>
        {titleOption ? (
          <div className='block justify-end sm:flex lg:justify-start'>
            <CheckboxWithLabel {...titleOption} />
          </div>
        ) : (
          <div />
        )}
        <div className='col-span-2 mt-2 grid grid-cols-2 gap-x-4 lg:col-span-1 lg:mt-0'>
          <Button color={selectAllActive ? 'blue' : 'default'} onClick={selectAll}>
            Alle auswählen
          </Button>
          <Button color={selectNoneActive ? 'blue' : 'default'} onClick={selectNone}>
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-y-2 sm:grid-cols-4'>{children}</div>
    </>
  );
};

export default FormSelection;
