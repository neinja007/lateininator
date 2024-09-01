import Button from '@/components/Button';
import Input from '@/components/Input';

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
  onSearch?: () => void;
};

const SearchBar = ({ query, setQuery, onSearch }: SearchBarProps) => {
  return (
    <div className='flex items-end justify-between'>
      <div className='flex-grow'>
        <Input
          label='Suche'
          placeholder='Wort oder Übersetzung eingeben'
          className='mr-4 w-full'
          value={query}
          onChange={setQuery}
        />
      </div>
      <Button className={'ml-4'} onClick={onSearch}>
        Suchen
      </Button>
    </div>
  );
};

export default SearchBar;
