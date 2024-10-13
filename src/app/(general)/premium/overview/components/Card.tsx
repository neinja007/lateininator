import clsx from 'clsx';
import { Check } from 'lucide-react';
import Link from 'next/link';

type CardProps = {
  title: string;
  features: string[];
  price: number;
  description: string;
  href?: string;
  owned: boolean;
  color: 'gray' | 'sky' | 'pink';
  loading?: boolean;
  highest: boolean;
  onClick?: () => void;
};

const colors: { [C in 'gray' | 'sky' | 'pink']: { container: string } } = {
  gray: {
    container:
      'bg-gray-300 hover:bg-gray-400 hover:dark:bg-gray-700 dark:bg-gray-900 hover:border-black hover:shadow-black hover:dark:shadow-gray-300 dark:shadow-gray-700'
  },
  sky: {
    container:
      'bg-sky-500 dark:bg-sky-800 hover:bg-sky-400 hover:dark:bg-sky-500 hover:border-sky-800 hover:shadow-sky-700 hover:dark:shadow-sky-300 dark:shadow-sky-800'
  },
  pink: {
    container:
      'bg-pink-500 dark:bg-pink-800 hover:dark:bg-pink-700 hover:bg-pink-400 hover:border-pink-800 hover:shadow-pink-700 hover:dark:shadow-pink-300 dark:shadow-pink-800'
  }
};

const Card = ({ features, price, title, color, owned, description, href, loading, highest, onClick }: CardProps) => {
  return (
    <div className='flex flex-col'>
      <div className={clsx('mb-2 h-6 text-center', owned && (highest ? 'text-sky-500' : 'opacity-50'))}>
        {description} {highest && '(Aktueller Rang)'}
      </div>
      <Link
        href={owned || onClick ? '' : href || ''}
        className={clsx(
          'overflow-hidden rounded-2xl border-gray-500 bg-gradient-to-b shadow-lg shadow-gray-500 transition-all hover:dark:border-white',
          colors[color].container,
          owned && (color !== 'pink' || !highest) && 'cursor-default opacity-25',
          loading && 'animate-pulse',
          highest && 'border-sky-500'
        )}
        onClick={onClick}
      >
        <h1 className='m-5 flex items-baseline justify-between text-2xl'>
          <span>Lateininator</span>{' '}
          <span className='rounded-lg px-3 py-1.5 font-bold text-white backdrop-brightness-50'>{title}</span>
        </h1>
        <br />
        <div className='mx-5 mt-4 space-y-2 text-lg'>
          {loading ? (
            <span>Features werden geladen...</span>
          ) : (
            <>
              {features.map((feature, i) => (
                <div key={i} className='flex items-center'>
                  <Check className='mr-3 h-8 w-8 text-green-400 dark:text-green-500' />
                  <span className='text-base font-medium uppercase tracking-wider'>{feature}</span>
                </div>
              ))}
            </>
          )}
        </div>
        <br />
        <button
          className={clsx(
            'mt-4 min-h-16 w-full px-4 text-lg font-medium leading-tight text-white backdrop-brightness-75 transition-colors',
            owned ? 'opacity-50' : color !== 'pink' && 'flex items-center justify-between'
          )}
          onClick={onClick}
        >
          {loading ? (
            'Wird geladen...'
          ) : (
            <>
              <span className='block text-xl'>
                {owned ? (
                  <span className='flex items-center justify-center'>
                    <Check className='mr-3 h-6 w-6' />
                    Schon erworben
                  </span>
                ) : color === 'pink' ? (
                  <span>7 Tage kostenlos testen</span>
                ) : (
                  'Erwerben' + (price ? ':' : '')
                )}
              </span>
              {!owned &&
                (price ? (
                  <span className={color !== 'pink' ? 'text-xl' : 'text-sm'}>
                    {color === 'pink' && 'danach'} {price}{' '}
                    <span className={color !== 'pink' ? 'text-xl' : 'text-xs'}>€</span>/Monat
                  </span>
                ) : (
                  <span className='text-xl'>Einloggen</span>
                ))}
            </>
          )}
        </button>
      </Link>
    </div>
  );
};

export default Card;
