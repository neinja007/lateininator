import { Word } from '@/types';
import TypeIndicator from '@/components/TypeIndicator';

type WordDisplayProps = {
	word: Word;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
	return (
		<div>
			{word.info && <p className='float-end border border-gray-600 bg-gray-100 px-3 p-1 rounded-lg'>{word.info}</p>}
			<p className='text-2xl font-medium'>
				{word.word} <TypeIndicator type={word.type} />
			</p>
		</div>
	);
};

export default WordDisplay;
