type CellContainerProps = {
  children?: React.ReactNode;
};

const CellContainer = ({ children }: CellContainerProps) => {
  return <div className='grid grid-cols-3 gap-3'>{children}</div>;
};

export default CellContainer;
