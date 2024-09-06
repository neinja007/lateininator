import clsx from 'clsx';
import ui from '@/styles/ui.module.css';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const BackToDictionaryButton = () => {
  return (
    <Link
      className={clsx(
        ui.basic,
        'hover flex w-fit items-center bg-gray-100 text-center transition-colors hover:bg-gray-200 md:!pl-2 dark:bg-gray-900 hover:dark:bg-gray-800'
      )}
      href='/vocabulary/dictionary'
    >
      <ArrowLeft size={20} className='inline align-text-top' /> Zurück zum Wörterbuch
    </Link>
  );
};

export default BackToDictionaryButton;
