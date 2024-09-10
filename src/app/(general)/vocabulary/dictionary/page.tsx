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
import FailToLoad from '@/components/FailToLoad';
import { useWords } from '@/hooks/database/queries/useWords';

const Page = () => {
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<'cards' | 'list'>('cards');

  useWidth('md', () => setView('cards'));

  const { words, status } = useWords(undefined, ['noun', 'verb', 'adjective'], query.toLowerCase().trim());

  return (
    <div className='space-y-5'>
      <Heading>Wörterbuch</Heading>
      <SearchBar query={query} setQuery={setQuery} />
      {status === 'error' ? (
        <FailToLoad />
      ) : (
        <ResultCount count={words ? words.length : 0} query={query} isFetched={status !== 'pending'} />
      )}
      {words && words.length > 0 && (
        <div>
          <Hr className='mb-4' />
          <DisplayMode view={view} setView={setView} />
          {view === 'list' ? (
            <WordList results={words} query={query} loading={status === 'pending'} />
          ) : (
            <WordCards results={words} query={query} loading={status === 'pending'} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
