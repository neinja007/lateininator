import Button from '@/components/Button';
import { Color } from '@/types/other';
import clsx from 'clsx';
import { Plus } from 'lucide-react';

type CellProps = {
  className?: string & React.CSSProperties;
  outlined?: boolean;
  onClick?: () => void;
  name?: string;
  lists?: number;
  owner?: string;
  buttonVisible?: boolean;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  buttonColor?: Color;
};

const Cell = ({
  outlined,
  onClick,
  className,
  buttonLabel,
  lists,
  name,
  owner,
  buttonVisible,
  buttonOnClick,
  buttonColor
}: CellProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'min-h-24 rounded-lg border border-gray-500 px-4 py-2 transition-colors hover:border-gray-700 dark:hover:border-gray-300',
        outlined
          ? 'border-dashed hover:border-solid hover:bg-gray-200 dark:hover:bg-gray-900'
          : 'bg-blue-200 dark:bg-blue-950',
        className
      )}
    >
      {outlined ? (
        <div className='flex h-full items-center justify-center text-gray-500 dark:text-gray-300'>
          <div className='text-center'>
            <Plus strokeWidth={1} className='m-0 mx-auto h-12 w-12' />
            Neue Kollektion anlegen
          </div>
        </div>
      ) : (
        <>
          <h3 className='text-center'>
            <span className='text-2xl font-medium'>{name}</span>
          </h3>
          <p className='mt-3 flex items-end justify-between'>
            <span className='mt-2'>Listen: {lists}</span>
            <span>
              von <span className='font-medium text-yellow-500'>{owner}</span>
            </span>
          </p>
          {buttonVisible && (
            <Button className='mt-3 w-full' onClick={buttonOnClick} color={buttonColor}>
              {buttonLabel}
            </Button>
          )}
        </>
      )}
    </button>
  );
};

export default Cell;
