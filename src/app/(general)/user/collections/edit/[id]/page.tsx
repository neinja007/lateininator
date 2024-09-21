'use client';

import Heading from '@/components/Heading';
import EditCollection from '../../components/EditCollection';
import Link from '@/components/Link';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Heading heading='Kollektion bearbeiten'>
        Hier können Sie Ihre Kollektionen bearbeiten. Wenn Sie einige Wörter nicht finden, können Sie diese bei der{' '}
        <Link href='/user/words'>Wort-Verwaltung</Link> hinzufügen.
      </Heading>
      <EditCollection collectionId={parseInt(params.id)} />
    </div>
  );
};

export default Page;
