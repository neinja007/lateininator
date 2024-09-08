import Button from '@/components/Button';
import Input from '@/components/Input';

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  isFetched: boolean;
};

const SearchBar = ({ query, setQuery, onSearch, isFetched }: SearchBarProps) => {
  return (
    <form
      className='flex items-end justify-between'
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className='flex-grow'>
        <Input
          label='Suche'
          placeholder='Lateinisches Wort eingeben'
          className='mr-4 w-full'
          value={query}
          onChange={setQuery}
        />
      </div>
      <Button type='submit' className='ml-4' disabled={!isFetched}>
        Suchen
      </Button>
    </form>
  );
};

export default SearchBar;
