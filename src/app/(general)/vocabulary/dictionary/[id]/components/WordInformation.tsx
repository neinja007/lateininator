import { words } from '@/data/words';
import { Word } from '@/types';
import { capitalizeFirstLetter } from '@/utils/inputUtils';
import Link from 'next/link';

type WordInformationProps = { word: Word };

const WordInformation = ({ word }: WordInformationProps) => {
	return (
		<div className='grid grid-cols-3'>
			<p>
				{word.translation ? (word.translation.length === 1 ? 'Übersetzung: ' : 'Übersetzungen: ') : 'Keine Übersetzung'}
				{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}
			</p>
			<p>
				{word.derivative && (
					<span>
						Abwandlung von{' '}
						<Link href={`/vocabulary/dictionary/${word.derivative}`} className='text-blue-500 underline'>
							{words.find((parent) => parent.id == word.derivative)?.word}
						</Link>
					</span>
				)}
			</p>
			{word.info && <p className='float-end border border-gray-600 bg-gray-100 px-3 p-1 rounded-lg'>{word.info}</p>}
		</div>
	);
};

export default WordInformation;
