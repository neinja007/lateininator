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

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<'cards' | 'list'>('cards');

  useWidth('md', () => setView('cards'));

  const wordsQuery = useQuery<Word[]>({
    queryKey: ['words', query],
    queryFn: ({ queryKey }) =>
      axios.get('/api/words', { params: { query: queryKey[1] || undefined } }).then((res) => res.data)
  });

  const handleSearch = () => setQuery(searchTerm);

  return (
    <div className='space-y-5'>
      <Heading>Wörterbuch</Heading>

      <SearchBar query={searchTerm} setQuery={setSearchTerm} onSearch={handleSearch} />

      <ResultCount count={wordsQuery.data ? wordsQuery.data.length : 0} query={query} />
      {wordsQuery.isSuccess && wordsQuery.data.length > 0 && (
        <div>
          <Hr />
          <DisplayMode view={view} setView={setView} />
          {view === 'list' ? (
            <WordList results={wordsQuery.data} query={query} loading={wordsQuery.isLoading} />
          ) : (
            <WordCards results={wordsQuery.data} query={query} loading={wordsQuery.isLoading} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
