import Button from '@/components/Button';
import Link from '@/components/Link';
import clsx from 'clsx';
import { Edit, Plus } from 'lucide-react';

type CellProps = {
  className?: string & React.CSSProperties;
  outlined?: boolean;
  name?: string;
  lists?: number;
  owner?: string;
  description?: string;
  active?: boolean;
  onToggleActive?: () => void;
  editable?: boolean;
  onToggleEditable?: () => void;
  owned?: boolean;
};

const Cell = ({
  outlined,
  className,
  lists,
  name,
  owner,
  description,
  active,
  onToggleActive,
  editable,
  onToggleEditable,
  owned
}: CellProps) => {
  return (
    <div className='min-h-32 rounded-lg border border-gray-200 dark:border-gray-700'>
      <div
        className={clsx(
          'w-full px-4 py-2 transition-colors',
          outlined ? 'h-[132px] rounded-lg border border-dashed' : 'h-24 rounded-t-lg',
          className
        )}
      >
        {outlined ? (
          <div className='flex h-full items-center justify-center text-gray-500 dark:text-gray-300'>
            <div className='text-center'>
              <Plus strokeWidth={1} className='m-0 mx-auto h-12 w-12' />
              <b>Aktivieren</b> Sie eine Kollektion, oder{' '}
              <Link href='/user/collections/new'>erstellen Sie eine neue</Link>
            </div>
          </div>
        ) : (
          <>
            <h3
              className={clsx(
                'flex text-2xl font-medium',
                description || editable ? 'justify-between' : 'justify-center'
              )}
            >
              {name}
              {editable && (
                <button
                  onClick={
                    onToggleEditable
                      ? (e) => {
                          e.stopPropagation();
                          onToggleEditable();
                        }
                      : undefined
                  }
                  className='-mr-2 rounded-lg bg-sky-400 p-2 hover:bg-sky-300 dark:bg-sky-700 dark:hover:bg-sky-600'
                >
                  <Edit className='h-4 w-4' />
                </button>
              )}
            </h3>
            {description && <p className='text-left'>{description}</p>}
            <p className='mt-3 flex items-end justify-between'>
              <span className='mt-2 block'>
                {lists} Liste{lists !== 1 && 'n'}
              </span>
              {owned ? (
                <span className='font-medium text-sky-500'>Ihre Kollektion</span>
              ) : (
                <span>
                  von <span className='font-medium text-yellow-500'>{owner}</span>
                </span>
              )}
            </p>
          </>
        )}
      </div>
      {!outlined && (
        <Button
          className={clsx('h-9 w-full rounded-b-lg', className)}
          unstyled
          onClick={onToggleActive}
          color={active ? 'orange' : 'green'}
        >
          {active ? 'Kollektion deaktivieren' : 'Kollektion aktivieren'}
        </Button>
      )}
    </div>
  );
};

export default Cell;
