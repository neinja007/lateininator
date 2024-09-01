'use client';
import { useState } from 'react';
import Heading from '@/components/Heading';
import DisplayMode from './components/DisplayMode';
import { ResultCount } from './components/ResultCount';
import WordCards from './components/WordCards';
import WordList from './components/WordList';
import SearchBar from './components/SearchBar';
import Hr from '@/components/Hr';
import { useWidth } from '@/hooks/useWidth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Word } from '@/types/word';
import { placeholderWord } from '@/constants/placeholderData';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<'cards' | 'list'>('cards');

  useWidth('md', () => setView('cards'));

  const { data, isFetched, isSuccess } = useQuery<Word[]>({
    placeholderData: [...Array(12)].map(() => placeholderWord),
    queryKey: ['words', query],
    queryFn: ({ queryKey }) =>
      axios.get('/api/words', { params: { query: queryKey[1] || undefined } }).then((res) => res.data)
  });

  const handleSearch = () => setQuery(searchTerm);

  return (
    <div className='space-y-5'>
      <Heading>Wörterbuch</Heading>

      <SearchBar query={searchTerm} setQuery={setSearchTerm} onSearch={handleSearch} isFetched={isFetched} />

      <ResultCount count={data ? data.length : 0} query={query} isFetched={isFetched} />
      {isSuccess && data.length > 0 && (
        <div>
          <Hr className={'mb-4'} />
          <DisplayMode view={view} setView={setView} />
          {view === 'list' ? (
            <WordList results={data} query={query} loading={!isFetched} />
          ) : (
            <WordCards results={data} query={query} loading={!isFetched} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
