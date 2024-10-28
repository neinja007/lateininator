'use client';
import { use } from 'react';

import Heading from '@/components/Heading';
import EditCollection from '../../components/EditCollection';
import Link from '@/components/Link';

const Page = (props: { params: Promise<{ id: string }> }) => {
  const params = use(props.params);
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
