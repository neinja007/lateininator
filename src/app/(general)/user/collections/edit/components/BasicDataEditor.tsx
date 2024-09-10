import { clsx } from 'clsx';
import ui from '@/styles/ui.module.css';
import { useId } from 'react';

type BasicDataEditorProps = {
  name: string;
  description: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
};

const BasicDataEditor = ({ name, description, setName, setDescription }: BasicDataEditorProps) => {
  const id = useId();
  return (
    <div className='mt-4'>
      <label htmlFor={id} className='block'>
        Beschreibung
      </label>
      <textarea
        id={id}
        className={clsx(ui.shape, 'mt-1 h-24 w-full')}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default BasicDataEditor;
