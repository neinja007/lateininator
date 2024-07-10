import { CreditCard, List } from 'react-feather';

type DisplayModeToggleProps = { view: 'cards' | 'list'; setView: (view: 'cards' | 'list') => void };

const DisplayModeToggle = ({ view, setView }: DisplayModeToggleProps) => {
	return (
		<div className='flex m-2 float-end'>
			<div
				className={`flex cursor-pointer ${view === 'cards' ? 'text-blue-700' : 'text-gray-400'}`}
				onClick={() => setView('cards')}
			>
				Kartenansicht{' '}
				<div className='relative z-0'>
					<CreditCard className='ml-2 mr-8 rotate-180' />
				</div>
			</div>
			<div
				className={`flex cursor-pointer ${view === 'list' ? 'text-blue-700' : 'text-gray-400'}`}
				onClick={() => setView('list')}
			>
				Listenansicht <List className='ml-2' />
			</div>
		</div>
	);
};

export default DisplayModeToggle;
