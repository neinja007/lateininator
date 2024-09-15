'use client';

import Heading from '@/components/Heading';
import EditCollection from '../components/EditCollection';

const Page = () => {
  return (
    <div>
      <Heading>Kollektion erstellen</Heading>
      <EditCollection collectionId={undefined} />
    </div>
  );
};

export default Page;
