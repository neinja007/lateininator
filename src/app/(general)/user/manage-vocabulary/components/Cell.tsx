type CellProps = {
  children?: React.ReactNode;
};

const Cell = ({ children }: CellProps) => {
  return <div className='flex items-center justify-center rounded-lg border px-2 py-1'>{children}</div>;
};

export default Cell;
