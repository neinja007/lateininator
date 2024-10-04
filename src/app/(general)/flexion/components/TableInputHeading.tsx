import InsertBasesButton from './InsertBasesButton';

type TableInputHeadingProps = {
  onInsertBases: () => void;
  text: string;
};

export const TableInputHeading = ({ onInsertBases, text }: TableInputHeadingProps) => {
  return (
    <div className='mb-4 flex justify-between'>
      <p className='text-center font-bold'>{text}</p>
      <InsertBasesButton onClick={onInsertBases} />
    </div>
  );
};
