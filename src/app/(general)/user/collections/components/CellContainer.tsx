import clsx from 'clsx';

type CellContainerProps = {
  children?: React.ReactNode;
  wide?: boolean;
};

const CellContainer = ({ children, wide }: CellContainerProps) => {
  return (
    <div
      className={clsx(
        'grid h-fit max-h-64 gap-3 overflow-y-scroll',
        wide ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'
      )}
    >
      {children}
    </div>
  );
};

export default CellContainer;
