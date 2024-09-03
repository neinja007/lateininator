type CellContainerProps = {
  children?: React.ReactNode;
};

const CellContainer = ({ children }: CellContainerProps) => {
  return <div className='grid h-fit max-h-64 grid-cols-2 gap-3 overflow-y-scroll lg:grid-cols-3'>{children}</div>;
};

export default CellContainer;
