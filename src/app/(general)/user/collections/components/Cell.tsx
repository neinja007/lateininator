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
  buttonLabel?: string;
  buttonColor?: Color;
};

const Cell = ({ outlined, className, buttonLabel, lists, name, owner, buttonColor, onClick }: CellProps) => {
  return (
    <div className='min-h-24'>
      <button
        className={clsx(
          'min-h-24 w-full rounded-lg border px-4 py-2 transition-colors',
          outlined
            ? 'border-dashed hover:border-solid hover:bg-gray-200 dark:hover:bg-gray-900'
            : 'border-blue-500 bg-blue-400 hover:border-blue-900 hover:bg-blue-500 dark:bg-blue-950 dark:hover:border-blue-300 dark:hover:bg-blue-800',
          className
        )}
        onClick={outlined ? onClick : undefined}
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
            <p className='mt-3 block items-end justify-between sm:flex'>
              <span className='mt-2 block'>{lists} Listen</span>
              <span>
                von <span className='font-medium text-yellow-400 dark:text-yellow-500'>{owner}</span>
              </span>
            </p>
          </>
        )}
      </button>
      {!outlined && (
        <Button className={clsx('mt-2 w-full', className)} onClick={onClick} color={buttonColor}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default Cell;
