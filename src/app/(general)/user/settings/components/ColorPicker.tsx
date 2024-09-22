import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import clsx from 'clsx';
import { CheckCircle } from 'lucide-react';

type ColorPickerProps = {
  disabled: boolean;
  value: Color;
  onChange: (color: Color) => void;
};

const availableColors = ['yellow', 'blue', 'green', 'purple', 'pink', 'orange'] as Color[];

const ColorPicker = ({ disabled, value, onChange }: ColorPickerProps) => {
  return (
    <div className='grid grid-cols-3'>
      {availableColors.map((color) => (
        <button key={color} onClick={() => onChange(color)} className='flex items-center justify-center'>
          <div className={clsx('h-6 w-6', COLORS[color])} />
          {value === color && <CheckCircle className='absolute h-4 w-4' />}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
