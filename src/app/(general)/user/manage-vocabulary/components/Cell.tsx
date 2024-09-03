import clsx from 'clsx';

type CellProps = {
  children?: React.ReactNode;
  outlined?: boolean;
};

const Cell = ({ children, outlined }: CellProps) => {
  return (
    <div
      className={clsx(
        'h-24 cursor-pointer rounded-lg border border-gray-500 px-4 py-2 transition-colors hover:border-gray-700 dark:hover:border-gray-300',
        outlined
          ? 'border-dashed hover:border-solid hover:bg-gray-200 dark:hover:bg-gray-900'
          : 'bg-blue-200 dark:bg-blue-950'
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
