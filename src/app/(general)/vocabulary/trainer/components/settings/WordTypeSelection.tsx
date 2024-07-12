import SelectButton from '@/components/SelectButton';
import { APP_CONSTANTS } from '@/constants';
import { words } from '@/data/words';
import { Word, WordProperty, WordType } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction, useEffect } from 'react';

type WordTypeSelectionProps = {
	validWords: Word[];
	setValidWords: Dispatch<SetStateAction<Word[]>>;
	setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
	selectedIds: number[];
	typesToCheck: WordType[];
	setTypesToCheck: Dispatch<SetStateAction<WordType[]>>;
	setMaxWordsInput: Dispatch<SetStateAction<string>>;
};

const WordTypeSelection = ({
	validWords,
	setWordPropertiesToCheck,
	setValidWords,
	selectedIds,
	typesToCheck,
	setTypesToCheck,
	setMaxWordsInput
}: WordTypeSelectionProps) => {
	useEffect(() => {
		setMaxWordsInput(validWords.length.toString());
	}, [setMaxWordsInput, validWords.length]);

	useEffect(() => {
		const possibleWords = words.filter(
			(word) =>
				selectedIds.includes(word.id) &&
				(typesToCheck.includes(word.type) ||
					(typesToCheck.includes('other') && !APP_CONSTANTS.mainWordTypes.includes(word.type as any)))
		);
		setValidWords(possibleWords);
	}, [selectedIds, setValidWords, typesToCheck]);

	return (
		<>
			<p>Wähle aus, welche Wortarten abgefragt werden sollen:</p>
			<div className='grid grid-cols-4 gap-4'>
				{([...APP_CONSTANTS.mainWordTypes, 'other'] as Array<WordType>).map((type, i) => (
					<SelectButton
						key={i}
						active={typesToCheck.includes(type)}
						handleClick={() =>
							setTypesToCheck((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
						}
						label={MAPPER.extended.type[type]}
					/>
				))}
			</div>
			<p>
				<b className='text-blue-700'>
					{validWords.length} von {selectedIds.length} Wörtern
				</b>{' '}
				stimmen mit den Wortarten überein.
			</p>
		</>
	);
};

export default WordTypeSelection;
