import InsertBasesButton from './InsertBasesButton';

type TableInputHeadingProps = {
  onInsertBases: () => void;
  text: string;
  stage: 'test' | 'review';
};

export const TableInputHeading = ({ onInsertBases, text, stage }: TableInputHeadingProps) => {
  return (
    <div className='mb-4 flex justify-between'>
      <p className='text-center font-bold'>{text}</p>
      {stage === 'test' && <InsertBasesButton onClick={onInsertBases} />}
    </div>
  );
};
