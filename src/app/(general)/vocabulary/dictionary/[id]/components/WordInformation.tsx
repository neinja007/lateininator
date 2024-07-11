import { words } from '@/data/words';
import { Word } from '@/types';
import { capitalizeFirstLetter } from '@/utils/inputUtils';
import Link from 'next/link';
import ui from '@/styles/ui.module.css';
import WordInfo from '@/components/WordInfo';

type WordInformationProps = { word: Word };

const WordInformation = ({ word }: WordInformationProps) => {
	return (
		<div className='grid grid-cols-3'>
			<p>
				{word.translation ? (word.translation.length === 1 ? 'Übersetzung: ' : 'Übersetzungen: ') : 'Keine Übersetzung'}
				{word.translation?.map((translation) => capitalizeFirstLetter(translation)).join(', ')}
			</p>
			<p className='text-center'>
				{word.derivative && (
					<span>
						Abwandlung von{' '}
						<Link href={`/vocabulary/dictionary/${word.derivative}`} className={ui.link}>
							{words.find((parent) => parent.id == word.derivative)?.word}
						</Link>
					</span>
				)}
			</p>
			{word.info && <WordInfo info={word.info} />}
		</div>
	);
};

export default WordInformation;
