import Select from '@/components/Select';
import { lists } from '@/data/lists';
import { Word } from '@/types';

type WordSelectionProps = {
  maxUnit: number;
  setMaxUnit: (arg: number) => void;
  validWords: Word[];
  type: string;
};

const WordSelection = ({ maxUnit, setMaxUnit, validWords, type }: WordSelectionProps) => {
  return (
    <>
      <p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
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
          Du hast{' '}
          <b className='text-blue-500'>
            {validWords.length} {type}
          </b>{' '}
          ausgewählt.
        </span>
      </div>
    </>
  );
};

export default WordSelection;
