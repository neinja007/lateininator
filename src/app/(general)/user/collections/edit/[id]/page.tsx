'use client';

import TutorialHeading from '@/components/TutorialHeading';
import EditCollection from '../../components/EditCollection';
import Link from '@/components/Link';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <TutorialHeading heading='Kollektion bearbeiten'>
        Hier können Sie Ihre Kollektionen bearbeiten. Wenn Sie einige Wörter nicht finden, können Sie diese bei der{' '}
        <Link href='/user/words'>Wort-Verwaltung</Link> hinzufügen.
      </TutorialHeading>
      <EditCollection collectionId={parseInt(params.id)} />
    </div>
  );
};

export default Page;
