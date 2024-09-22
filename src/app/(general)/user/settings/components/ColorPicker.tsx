import { COLORS } from '@/constants/other';
import { Color } from '@/types/other';
import clsx from 'clsx';
import { CheckCircle } from 'lucide-react';

const availableColors = ['yellow', 'blue', 'green', 'purple', 'pink', 'orange'] as const;
export type AvailableColor = (typeof availableColors)[number];

type ColorPickerProps = {
  disabled: boolean;
  value: AvailableColor;
  onChange: (color: Color) => void;
};

const colorMap: { [key in AvailableColor]: string } = {
  yellow: 'Gelb',
  blue: 'Blau',
  green: 'Grün',
  purple: 'Lila',
  pink: 'Pink',
  orange: 'Orange'
};

const ColorPicker = ({ disabled, value, onChange }: ColorPickerProps) => {
  return (
    <div className='flex items-center'>
      <span className={clsx('mr-4 rounded-md px-2 text-black', COLORS[value].static)}>{colorMap[value]}</span>
      <div className='grid grid-cols-3'>
        {availableColors.map((color) => (
          <button
            disabled={disabled}
            key={color}
            onClick={() => onChange(color)}
            className='flex items-center justify-center'
          >
            <div className={clsx('h-6 w-6', COLORS[color].static)} />
            {value === color && <CheckCircle className='absolute h-4 w-4' />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
