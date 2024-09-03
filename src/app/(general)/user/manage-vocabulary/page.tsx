'use client';
import Heading from '@/components/Heading';
import { useState } from 'react';
import Hr from '@/components/Hr';
import BrowseCollections from './components/BrowseCollections';
import ManageCollections from './components/ManageCollections';

const Page = () => {
  const [browseCollections, setBrowseCollections] = useState<boolean>(false);

  return (
    <div>
      <Heading>Wortschatz</Heading>
      <ManageCollections
        browseCollections={browseCollections}
        enableBrowseCollections={() => setBrowseCollections(true)}
      />
      {browseCollections && (
        <>
          <Hr className='my-5' />
          <BrowseCollections hideBrowseCollections={() => setBrowseCollections(false)} />
        </>
      )}
    </div>
  );
};

export default Page;
