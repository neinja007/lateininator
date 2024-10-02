import { clsx } from 'clsx';
import ui from '@/styles/ui.module.css';
import { useId } from 'react';

type TextareaProps = {
  value: string;
  setValue: (description: string) => void;
};

const Textarea = ({ value, setValue }: TextareaProps) => {
  const id = useId();
  return (
    <div className='mt-4'>
      <label htmlFor={id} className='block'>
        Beschreibung
      </label>
      <textarea
        id={id}
        className={clsx(ui.shape, 'mt-1 h-24 w-full')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Textarea;
