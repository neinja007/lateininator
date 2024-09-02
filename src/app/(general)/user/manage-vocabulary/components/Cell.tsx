type CellProps = {
  children?: React.ReactNode;
};

const Cell = ({ children }: CellProps) => {
  return <div className='rounded-lg border bg-blue-200 px-4 py-2 dark:bg-blue-950'>{children}</div>;
};

export default Cell;
