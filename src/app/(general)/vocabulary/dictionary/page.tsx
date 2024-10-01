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
import { Word } from '@/types/word';
import { placeholderWord } from '@/constants/placeholderData';
import LinkToSupportEmail from '@/components/LinkToSupportEmail';

const Page = () => {
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<'cards' | 'list'>('cards');

  useWidth('md', () => setView('cards'));

  const {
    data: words,
    fetchStatus,
    status
  } = useWords<Word[]>({
    query: query.toLowerCase().trim(),
    include: ['noun', 'verb', 'adjective']
  });

  let results = words || [...Array(12)].map((_) => placeholderWord);

  return (
    <div className='space-y-5'>
      <Heading heading='Wörterbuch'>
        Das ist das Lateininator Wörterbuch. Hier kannst du alle Wörter sehen, die es auf dem Lateininator gibt.
        {/* Wenn es ein Wort noch nicht gibt, kannst du es unter <Link href='/user/words'>Wörter verwalten</Link> hinzufügen. */}
      </Heading>
      <SearchBar query={query} setQuery={setQuery} />
      {status === 'error' ? (
        <FailToLoad />
      ) : (
        <div className='flex justify-between'>
          <ResultCount count={words ? words.length : 0} query={query} isFetched={fetchStatus === 'idle'} />
          <span>
            Fehlendes Wort? Melden Sie es bitte bei unserem <LinkToSupportEmail />.
          </span>
        </div>
      )}
      {(status !== 'success' || words.length > 0) && (
        <div>
          <Hr className='mb-4' />
          <DisplayMode view={view} setView={setView} />
          {view === 'list' ? (
            <WordList results={results} query={query} loading={fetchStatus === 'fetching'} />
          ) : (
            <WordCards results={results} query={query} loading={fetchStatus === 'fetching'} />
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
