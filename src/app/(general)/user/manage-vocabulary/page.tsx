'use client';
import Heading from '@/components/Heading';
import Hr from '@/components/Hr';
import BrowseCollections from './components/BrowseCollections';
import ManageCollections from './components/ManageCollections';

const Page = () => {
  return (
    <div>
      <Heading>Wortschatz</Heading>
      <ManageCollections />
      <Hr className='my-5' />
      <BrowseCollections />
    </div>
  );
};

export default Page;
