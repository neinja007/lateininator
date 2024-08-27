import Select from '@/components/Select';
import { lists } from '@/data/lists';
import { Word } from '@/types/word';

type ListSelectionProps = {
  maxUnit: number;
  setMaxUnit: (arg: number) => void;
  validWords: Word[];
  type: string;
};

const ListSelection = ({ maxUnit, setMaxUnit, validWords, type }: ListSelectionProps) => {
  return (
    <>
      <p>Wähle eine Lektion aus. Wörter zur Abfrage werden von dieser und von vorherigen Lektionen ausgewählt.</p>
      <div className='sm:flex'>
        <Select
          label='Lektion'
          value={maxUnit}
          handleChange={setMaxUnit}
          options={lists.reduce((acc: any, list) => {
            acc[list.id] = list.name;
            return acc;
          }, {})}
        />
        <span className='mb-1.5 mt-2 block sm:ml-5 sm:mt-auto'>
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

export default ListSelection;
