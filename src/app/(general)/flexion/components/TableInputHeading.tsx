import InsertBasesButton from './InsertBasesButton';

type TableInputHeadingProps = {
  onInsertBases: () => void;
  text: string;
  stage: 'test' | 'review';
};

export const TableInputHeading = ({ onInsertBases, text, stage }: TableInputHeadingProps) => {
  return (
    <div className='mb-4 flex justify-between'>
      <p className='text-center text-xl font-bold'>{text}</p>
      <InsertBasesButton disabled={stage === 'review'} onClick={onInsertBases} />
    </div>
  );
};
