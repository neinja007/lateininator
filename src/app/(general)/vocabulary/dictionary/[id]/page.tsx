import { words } from '@/data/words';
import Header from './components/Header';
import WordInformation from './components/WordInformation';
import TableInformation from './components/TableInformation';
import WordNotFound from './components/WordNotFound';
import VerbTable from './components/tables/VerbTable';
import AdjectiveTable from './components/tables/AdjectiveTable';
import Hr from '@/components/Hr';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { MainWordType } from '@/types/appConstants';
import NounTable from './components/tables/NounTable';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
  const word = words.find((word) => word.id.toString() === id);
  if (!word) return <WordNotFound />;

  return (
    <div className='space-y-3'>
      <Header word={word} />
      <Hr />
      <WordInformation word={word} />
      {APP_CONSTANTS.mainWordTypes.includes(word.type as MainWordType) && (
        <>
          <Hr />
          <TableInformation word={word} />
          {word.type === 'noun' ? (
            <NounTable word={word} />
          ) : word.type === 'verb' ? (
            <VerbTable word={word} />
          ) : word.type === 'adjective' ? (
            <AdjectiveTable word={word} />
          ) : (
            false
          )}
        </>
      )}
    </div>
  );
};

export default Page;
