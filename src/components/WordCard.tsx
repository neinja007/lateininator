import { mapper } from '@/data/mapper';
import { Word } from '@/data/types';

type WordCardProps = {
	word: Word;
	query?: string;
};

function WordCard({ word, query }: WordCardProps) {
	return <div className='border'>WordCard</div>;
}

export default WordCard;
