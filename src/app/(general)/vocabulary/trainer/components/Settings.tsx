import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import Input from '@/components/Input';
import SelectButton from '@/components/SelectButton';
import { APP_CONSTANTS } from '@/constants';
import { lists } from '@/data/lists';
import { words } from '@/data/words';
import { List, Word, WordProperty, WordType } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction, use, useEffect, useState } from 'react';
import ListSelection from './ListSelection';
import WordTypeSelection from './WordTypeSelection';

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

	useEffect(() => {
		setMaxWordsInput(validWords.length.toString());
	}, [validWords.length]);

	useEffect(
		() => updatePossibleWords(validWords.slice(0, maxWordsInput === '' ? 0 : parseInt(maxWordsInput))),
		[maxWordsInput, updatePossibleWords, validWords]
	);

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
				setTypesToCheck={setTypesToCheck}
			/>
			<hr />
			<div className='grid grid-cols-3'>
				<p>Wähle aus, was abgefragt werden soll:</p>
				<CheckboxWithLabel
					checked={checkTranslation}
					handleChange={() => setCheckTranslation((prevCheckTranslation) => !prevCheckTranslation)}
					label={'Übersetzung'}
				/>
			</div>
			<div className='grid grid-cols-3'>
				{APP_CONSTANTS.mainWordTypes.map((type: WordType) => (
					<div key={type}>
						<span className={typesToCheck.includes(type) ? 'text-black' : 'text-gray-500'}>
							{MAPPER.extended.type[type]}
						</span>
						:
						{APP_CONSTANTS.wordProperties[type].map((property) => (
							<CheckboxWithLabel
								key={property}
								disabled={!typesToCheck.includes(type)}
								checked={wordPropertiesToCheck.includes(property)}
								handleChange={(checked) =>
									setWordPropertiesToCheck((prev) =>
										checked ? [...prev, property] : prev.filter((p) => p !== property)
									)
								}
								label={MAPPER.extended.wordProperty[property]}
							/>
						))}
					</div>
				))}
			</div>
			<hr />
			<p>Abfrage (die Überprüfung kann auch frühzeitig beendet werden):</p>
			<div className='flex space-x-5'>
				<SelectButton
					className='w-1/2 font-medium'
					active={checkType === 'all'}
					handleClick={() => setCheckType('all')}
					label={`Alle verfügbaren Wörter (${validWords.length}) abfragen`}
				/>
				<SelectButton
					className='w-1/2 font-medium'
					active={checkType === 'limited'}
					handleClick={() => setCheckType('limited')}
					label='Begrenzte Anzahl abfragen'
				/>
			</div>
			<div className='text-center'>
				{checkType === 'all' ? (
					<CheckboxWithLabel
						checked={checkIncorrectWordsAgain}
						handleChange={setCheckIncorrectWordsAgain}
						label='Bei Fehlern Wörter nochmals abprüfen'
					/>
				) : (
					<Input
						label={`Anzahl der abgefragten Wörter (max. ${validWords.length})`}
						handleChange={(value) =>
							setMaxWordsInput(
								(!isNaN(parseInt(value))
									? parseInt(value) > validWords.length
										? validWords.length
										: parseInt(value) < 0
										  ? 0
										  : parseInt(value)
									: value === ''
									  ? ''
									  : 0
								).toString()
							)
						}
						value={maxWordsInput}
						className={'w-1/3 text-center'}
						type='number'
					/>
				)}
			</div>
			<Button onClick={handleContinue} className='w-full' disabled={!start}>
				<span>{!start ? 'Wähle einige Wörter aus, um fortzufahren' : 'Start'}</span>
			</Button>
		</>
	);
};

export default Settings;
