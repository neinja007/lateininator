import Button from '@/components/Button';
import Input from '@/components/Input';

type SearchBarProps = {
	query: string;
	setQuery: (query: string) => void;
};

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
	return (
		<div>
			<Input
				label='Suche:'
				placeholder='Wort oder Übersetzung eingeben'
				className='w-full max-w-96 mr-4'
				value={query}
				handleChange={setQuery}
			/>
			<Button className=''>Erweiterte Suche</Button>
		</div>
	);
};

export default SearchBar;
