import Heading from '@/components/Heading';
import EditCollection from '../components/EditCollection';

const Page = () => {
  return (
    <div>
      <Heading>Wortschatz</Heading>
      <EditCollection collectionId={undefined} />
    </div>
  );
};

export default Page;
