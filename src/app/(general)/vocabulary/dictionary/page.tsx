'use client';

import { useState } from 'react';
import { useResults } from '@/hooks/useResults';
import Heading from '@/components/Heading';
import DisplayMode from './components/DisplayMode';
import { ResultCount } from './components/ResultCount';
import WordCards from './components/WordCards';
import WordList from './components/WordList';
import SearchBar from './components/SearchBar';
import Hr from '@/components/Hr';
import { useWidth } from '@/hooks/useWidth';

const Page = () => {
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<'cards' | 'list'>('cards');
  const [limitResults, setLimitResults] = useState<boolean>(true);

  useWidth('md', () => setView('cards'));

  const results = useResults(query, limitResults);

  return (
    <div className='space-y-5'>
      <Heading>Wörterbuch</Heading>

      <SearchBar query={query} setQuery={setQuery} />

      <ResultCount count={results.length} query={query} limitResults={limitResults} setLimitResults={setLimitResults} />
      <Hr />
      {results.length > 0 && (
        <div>
          <DisplayMode view={view} setView={setView} />
          {view === 'list' ? (
            <WordList results={results} query={query} />
          ) : (
            <WordCards results={results} query={query} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
