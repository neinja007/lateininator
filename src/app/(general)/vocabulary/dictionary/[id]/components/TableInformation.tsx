import { Word } from '@/types';
import { MAPPER } from '@/utils/mapper';

type ComponentNameProps = { word: Word };

const ComponentName = ({ word }: ComponentNameProps) => {
	let info = '';
	if (word.type === 'noun') {
		info = `${word.declension === '-' ? 'Keine Deklination' : MAPPER.extended.declension[word.declension]}; ${
			word.gender === '-' ? 'Kein Geschlecht' : MAPPER.extended.gender[word.gender]
		}`;
	} else if (word.type === 'verb') {
		info = word.conjugation === '-' ? 'Keine Konjugation' : MAPPER.extended.conjugation[word.conjugation];
	} else if (word.type === 'adjective') {
		info = word.comparison === '-' ? 'Keine Deklination' : MAPPER.extended.comparison[word.comparison];
	}

	return (
		<div>
			<p className='text-center'>{info}</p>
		</div>
	);
};

export default ComponentName;
