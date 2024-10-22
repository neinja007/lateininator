import { availableColors, COLORS } from '@/constants/other';
import { PrimaryColor } from '@/types/other';
import clsx from 'clsx';
import { CheckCircle } from 'lucide-react';

type ColorPickerProps = {
  disabled: boolean;
  value: PrimaryColor | 'random';
  onChange: (color: PrimaryColor | 'random') => void;
};

const colorMap: { [key in PrimaryColor | 'random']: string } = {
  yellow: 'Gelb',
  blue: 'Blau',
  green: 'Grün',
  purple: 'Lila',
  pink: 'Pink',
  orange: 'Orange',
  red: 'Rot',
  random: 'Zufällig',
  gray: 'Grau',
  cyan: 'Cyan',
  lime: 'Limette',
  default: 'Standard'
};

const ColorPicker = ({ disabled, value, onChange }: ColorPickerProps) => {
  return (
    <div className='flex items-center'>
      <span
        className={clsx(
          'mr-4 rounded-md px-2',
          value === 'random'
            ? 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 dark:from-red-700 dark:via-yellow-700 dark:to-blue-700'
            : COLORS[value].static
        )}
      >
        {colorMap[value]}
      </span>
      <div className='grid grid-cols-5'>
        {([...availableColors, 'random'] as (PrimaryColor | 'random')[]).map((color) => (
          <button
            disabled={disabled}
            key={color}
            onClick={() => onChange(color)}
            className='flex items-center justify-center'
          >
            <div
              className={clsx(
                'h-6 w-6 border-none',
                color === 'random'
                  ? 'bg-gradient-to-b from-red-400 via-yellow-400 to-blue-400 dark:from-red-700 dark:via-yellow-700 dark:to-blue-700'
                  : COLORS[color].static
              )}
            />
            {value === color && <CheckCircle className='absolute h-4 w-4' />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
