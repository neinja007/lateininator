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
        label='Suche'
        placeholder='Wort oder Übersetzung eingeben'
        className='mr-4 w-full'
        value={query}
        onChange={setQuery}
      />
    </div>
  );
};

export default SearchBar;
