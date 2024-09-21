'use client';

import Heading from '@/components/Heading';
import EditCollection from '../components/EditCollection';
import Link from '@/components/Link';

const Page = () => {
  return (
    <div>
      <Heading heading='Kollektion erstellen'>
        Hier können Sie Ihre Kollektionen erstellen. Wenn Sie einige Wörter nicht finden, können Sie diese bei der{' '}
        <Link href='/user/words'>Wort-Verwaltung</Link> hinzufügen.
      </Heading>
      <EditCollection collectionId={undefined} />
    </div>
  );
};

export default Page;
