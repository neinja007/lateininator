import { COLORS } from '@/constants/other';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { List, RectangleHorizontal } from 'lucide-react';

type DisplayModeProps = { view: 'cards' | 'list'; setView: (view: 'cards' | 'list') => void };

const DisplayMode = ({ view, setView }: DisplayModeProps) => {
  const primaryColor = usePrimaryColor();

  return (
    <div className='float-end mb-4 mr-2 hidden md:flex'>
      <div
        className={`flex cursor-pointer select-none transition-colors ${view === 'cards' ? COLORS[primaryColor].text : 'text-gray-400'}`}
        onClick={() => setView('cards')}
      >
        Kartenansicht
        <RectangleHorizontal className='ml-2 mr-8' />
      </div>
      <div
        className={`flex cursor-pointer select-none transition-colors ${view === 'list' ? COLORS[primaryColor].text : 'text-gray-400'}`}
        onClick={() => setView('list')}
      >
        Listenansicht <List className='ml-2' />
      </div>
    </div>
  );
};

export default DisplayMode;
