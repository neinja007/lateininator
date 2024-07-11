import { words } from '@/data/words';
import Header from './components/Header';
import WordInformation from './components/WordInformation';
import TableInformation from './components/TableInformation';
import WordNotFound from './components/WordNotFound';
import NounTable from './components/tables/NounTable';
import VerbTable from './components/tables/VerbTable';
import AdjectiveTable from './components/tables/AdjectiveTable';

type PageProps = { params: { id: string } };

const Page = ({ params: { id } }: PageProps) => {
	const word = words.find((word) => word.id.toString() === id);
	if (!word) return <WordNotFound />;

	return (
		<div>
			<Header word={word} />
			<hr className='my-2' />
			<WordInformation word={word} />
			<hr className='my-2' />
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
		</div>
	);
};

export default Page;
