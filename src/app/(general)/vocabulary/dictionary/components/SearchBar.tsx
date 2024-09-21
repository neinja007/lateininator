import Input from '@/components/Input';

type SearchBarProps = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <Input
      autoFocus
      autoComplete='on'
      label='Suche'
      placeholder='Lateinisches Wort eingeben'
      className='mr-4 w-full'
      value={query}
      onChange={setQuery}
    />
  );
};

export default SearchBar;
