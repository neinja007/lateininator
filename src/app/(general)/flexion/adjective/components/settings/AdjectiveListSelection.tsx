import Select from '@/components/Select';
import { lists } from '@/data/lists';
import { Word } from '@/types';

type AdjectiveListSelectionProps = {
  maxUnit: number;
  setMaxUnit: (arg: number) => void;
  validWords: Word[];
};

const AdjectiveListSelection = ({ maxUnit, setMaxUnit, validWords }: AdjectiveListSelectionProps) => {
  return (
    <>
      <div className='flex'>
        <Select
          label='Lektion'
          value={maxUnit}
          handleChange={setMaxUnit}
          options={lists.reduce((acc: any, list) => {
            acc[list.id] = list.name;
            return acc;
          }, {})}
        />
        <span className='mb-1.5 ml-5 mt-auto'>
          Du hast <b className='text-blue-500'>{validWords.length} Adjektive</b> ausgewählt.
        </span>
      </div>
    </>
  );
};

export default AdjectiveListSelection;
