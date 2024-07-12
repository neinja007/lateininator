import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants';
import { Word, WordProperty, WordType } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ListSelection from './settings/ListSelection';
import WordTypeSelection from './settings/WordTypeSelection';
import CheckTypeSelection from './settings/CheckTypeSelection';
import PropertySelection from './settings/PropertySelection';
import { words } from '@/data/words';

type SettingsProps = {
	checkTranslation: boolean;
	setCheckTranslation: Dispatch<SetStateAction<boolean>>;
	wordPropertiesToCheck: WordProperty[];
	setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
	checkType: 'all' | 'limited';
	setCheckType: Dispatch<SetStateAction<'all' | 'limited'>>;
	checkIncorrectWordsAgain: boolean;
	setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
	updateWords: (arg: Word[]) => void;
	start: () => void;
	enableStart: boolean;
};

const Settings = ({
	checkTranslation,
	setCheckTranslation,
	wordPropertiesToCheck,
	setWordPropertiesToCheck,
	checkType,
	setCheckType,
	checkIncorrectWordsAgain,
	setCheckIncorrectWordsAgain,
	updateWords,
	start,
	enableStart
}: SettingsProps) => {
	const [selectedIds, setSelectedIds] = useState<Array<number>>([]);
	const [validWords, setValidWords] = useState<Word[]>([]);

	const [typesToCheck, setTypesToCheck] = useState<Array<WordType>>([...APP_CONSTANTS.mainWordTypes, 'other']);
	const [maxWordsInput, setMaxWordsInput] = useState<string>('1');

	useEffect(() => {
		let maxWordInput = maxWordsInput === '' ? 0 : parseInt(maxWordsInput);
		let length = checkType === 'limited' ? maxWordInput : validWords.length;
		updateWords(validWords.slice(0, length));
	}, [maxWordsInput, checkType, updateWords, selectedIds, typesToCheck, validWords]);

	return (
		<>
			<ListSelection selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
			<hr />
			<WordTypeSelection
				validWords={validWords}
				setValidWords={setValidWords}
				setWordPropertiesToCheck={setWordPropertiesToCheck}
				selectedIds={selectedIds}
				typesToCheck={typesToCheck}
				setMaxWordsInput={setMaxWordsInput}
				setTypesToCheck={setTypesToCheck}
			/>
			<hr />
			<PropertySelection
				checkTranslation={checkTranslation}
				setCheckTranslation={setCheckTranslation}
				typesToCheck={typesToCheck}
				wordPropertiesToCheck={wordPropertiesToCheck}
				setWordPropertiesToCheck={setWordPropertiesToCheck}
			/>
			<hr />
			<CheckTypeSelection
				checkIncorrectWordsAgain={checkIncorrectWordsAgain}
				setCheckIncorrectWordsAgain={setCheckIncorrectWordsAgain}
				checkType={checkType}
				setCheckType={setCheckType}
				maxWordsInput={maxWordsInput}
				setMaxWordsInput={setMaxWordsInput}
				validWords={validWords}
			/>
			<Button onClick={start} className='w-full' disabled={!enableStart}>
				<span>{!enableStart ? 'Wähle einige Wörter aus, um fortzufahren' : 'Start'}</span>
			</Button>
		</>
	);
};

export default Settings;
