import Button from '@/components/Button';
import { APP_CONSTANTS } from '@/constants';
import { Word, WordProperty, WordType } from '@/types';
import { Dispatch, SetStateAction, use, useEffect, useState } from 'react';
import ListSelection from './ListSelection';
import WordTypeSelection from './WordTypeSelection';
import CheckTypeSelection from './CheckTypeSelection';
import PropertySelection from './PropertySelection';

type SettingsProps = {
	checkTranslation: boolean;
	setCheckTranslation: Dispatch<SetStateAction<boolean>>;
	wordPropertiesToCheck: WordProperty[];
	setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
	checkType: 'all' | 'limited';
	setCheckType: Dispatch<SetStateAction<'all' | 'limited'>>;
	checkIncorrectWordsAgain: boolean;
	setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
	updatePossibleWords: (arg?: Word[]) => void;
	handleContinue: () => void;
	start: boolean;
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
	updatePossibleWords,
	handleContinue,
	start
}: SettingsProps) => {
	const [selectedIds, setSelectedIds] = useState<Array<number>>([]);
	const [validWords, setValidWords] = useState<Word[]>([]);

	const [typesToCheck, setTypesToCheck] = useState<Array<WordType>>([...APP_CONSTANTS.mainWordTypes, 'other']);
	const [maxWordsInput, setMaxWordsInput] = useState<string>('1');

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
				updatePossibleWords={updatePossibleWords}
			/>
			<Button onClick={handleContinue} className='w-full' disabled={!start}>
				<span>{!start ? 'Wähle einige Wörter aus, um fortzufahren' : 'Start'}</span>
			</Button>
		</>
	);
};

export default Settings;
