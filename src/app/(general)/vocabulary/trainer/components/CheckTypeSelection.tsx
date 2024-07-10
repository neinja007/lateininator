import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import SelectButton from '@/components/SelectButton';
import Input from '@/components/Input';
import { Word } from '@/types';
import { Dispatch, SetStateAction, useEffect } from 'react';

type CheckTypeSelectionProps = {
	validWords: Word[];
	checkType: 'all' | 'limited';
	setCheckType: Dispatch<SetStateAction<'all' | 'limited'>>;
	checkIncorrectWordsAgain: boolean;
	setCheckIncorrectWordsAgain: Dispatch<SetStateAction<boolean>>;
	maxWordsInput: string;
	setMaxWordsInput: Dispatch<SetStateAction<string>>;
	updatePossibleWords: (arg?: Word[]) => void;
};

const CheckTypeSelection = ({
	checkIncorrectWordsAgain,
	setCheckIncorrectWordsAgain,
	validWords,
	checkType,
	setCheckType,
	maxWordsInput,
	setMaxWordsInput,
	updatePossibleWords
}: CheckTypeSelectionProps) => {
	useEffect(() => {
		let maxWordInput = maxWordsInput === '' ? 0 : parseInt(maxWordsInput);
		let length = checkType === 'limited' ? maxWordInput : validWords.length;
		updatePossibleWords(validWords.slice(0, length));
	}, [maxWordsInput, updatePossibleWords, validWords, checkType]);

	return (
		<>
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
		</>
	);
};

export default CheckTypeSelection;
