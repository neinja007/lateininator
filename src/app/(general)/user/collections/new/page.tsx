'use client';

import TutorialHeading from '@/components/TutorialHeading';
import EditCollection from '../components/EditCollection';
import Link from '@/components/Link';

const Page = () => {
  return (
    <div>
      <TutorialHeading heading='Kollektion erstellen'>
        Hier können Sie Ihre Kollektionen erstellen. Wenn Sie einige Wörter nicht finden, können Sie diese bei der{' '}
        <Link href='/user/words'>Wort-Verwaltung</Link> hinzufügen.
      </TutorialHeading>
      <EditCollection collectionId={undefined} />
    </div>
  );
};

export default Page;
