type CellContainerProps = {
  children?: React.ReactNode;
};

const CellContainer = ({ children }: CellContainerProps) => {
  return <div className='grid h-fit max-h-64 grid-cols-3 gap-3 overflow-y-scroll'>{children}</div>;
};

export default CellContainer;
