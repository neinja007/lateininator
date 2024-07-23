import Select from '@/components/Select';
import { lists } from '@/data/lists';
import { Word } from '@/types';

type ListSelectionProps = {
  maxUnit: number;
  setMaxUnit: (arg: number) => void;
  validWords: Word[];
};

const ListSelection = ({ maxUnit, setMaxUnit, validWords }: ListSelectionProps) => {
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
          Du hast <b className='text-blue-500'>{validWords.length} Verben</b> ausgewählt.
        </span>
      </div>
    </>
  );
};

export default ListSelection;
