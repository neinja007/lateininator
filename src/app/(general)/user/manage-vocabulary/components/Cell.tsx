type CellProps = {
  children?: React.ReactNode;
};

const Cell = ({ children }: CellProps) => {
  return <div className='rounded-lg bg-blue-200 px-2 py-1 dark:bg-blue-950'>{children}</div>;
};

export default Cell;
