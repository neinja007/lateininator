import clsx from 'clsx';

type CellContainerProps = {
  children?: React.ReactNode;
  wide?: boolean;
};

const CellContainer = ({ children, wide }: CellContainerProps) => {
  return (
    <div
      className={clsx(
        'grid h-fit gap-6',
        wide ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {children}
    </div>
  );
};

export default CellContainer;
