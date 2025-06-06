import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import clsx from 'clsx';

type FormSelectionWrapperProps = {
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
  columns?: 2 | 3 | 4;
};

const FormSelectionWrapper = ({
  selectAll,
  selectAllActive,
  selectNone,
  selectNoneActive,
  titleOption,
  children,
  columns = 4
}: FormSelectionWrapperProps) => {
  const columnClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4'
  };

  return (
    <>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3'>
        <p>Wählen Sie aus, was abgefragt werden soll:</p>
        {titleOption ? (
          <div className='block justify-end sm:flex lg:justify-start'>
            <CheckboxWithLabel {...titleOption} />
          </div>
        ) : (
          <div />
        )}
        <div className='col-span-2 mt-2 grid grid-cols-2 gap-x-4 lg:col-span-1 lg:mt-0'>
          <Button color={selectAllActive ? 'primary' : 'default'} onClick={selectAll}>
            Alle auswählen
          </Button>
          <Button color={selectNoneActive ? 'primary' : 'default'} onClick={selectNone}>
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className={clsx('grid grid-cols-2 gap-y-2 *:pr-4', columnClasses[columns])}>{children}</div>
    </>
  );
};

export default FormSelectionWrapper;
