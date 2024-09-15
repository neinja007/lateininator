'use client';

import Heading from '@/components/Heading';
import EditCollection from '../../components/EditCollection';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Heading>Kollektion bearbeiten</Heading>
      <EditCollection collectionId={parseInt(params.id)} />
    </div>
  );
};

export default Page;
