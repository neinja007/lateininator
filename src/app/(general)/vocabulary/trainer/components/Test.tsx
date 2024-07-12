import ActionBar from '@/components/ActionBar';
import Input from '@/components/Input';
import TrainerInput from '@/components/TrainerInput';
import WordDisplay from '@/components/WordDisplay';
import { APP_CONSTANTS } from '@/constants';
import { useActiveWord } from '@/hooks/useActiveWord';
import { Stage } from '@/hooks/useStage';
import { Word, WordProperty } from '@/types';
import { compareValues, getInputWithCorrectValue } from '@/utils/inputUtils';
import { MAPPER } from '@/utils/mapper';
import { isKeyInObject, isWordPropertiesUsingSelectInput } from '@/utils/typeguards';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type TestProps = {
	stage: Stage;
	activeWord: Word;
	inputValues: Record<WordProperty | 'translation', string>;
	setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
	checkTranslation: boolean;
	validKeysToCheck: WordProperty[];
	handleContinue: (newStage?: Stage) => void;
	setStage: Dispatch<SetStateAction<Stage>>;
	progressPercentage: number;
};

const Test = ({
	stage,
	activeWord,
	inputValues,
	checkTranslation,
	setInputValues,
	validKeysToCheck,
	handleContinue,
	progressPercentage
}: TestProps) => {
	return (
		activeWord && (
			<>
				<WordDisplay word={activeWord} />
				<hr />
				<div>
					{checkTranslation && activeWord.translation && (
						<Input
							label='Übersetzung (mehrere Antworten durch "," trennen)'
							disabled={stage === 'review'}
							className={
								'w-full' +
								(stage === 'review'
									? compareValues(inputValues.translation, activeWord.translation, true)
										? ' bg-green-300 border-none'
										: ' bg-red-300 border-none'
									: '')
							}
							value={
								stage === 'review'
									? getInputWithCorrectValue(inputValues.translation, activeWord.translation, true)
									: inputValues.translation
							}
							onChange={(value) => setInputValues((prev) => ({ ...prev, translation: value }))}
						/>
					)}
				</div>
				{validKeysToCheck.length > 0 && (
					<div className='grid grid-cols-2 gap-4'>
						{validKeysToCheck.map((key, i) => {
							let value = (activeWord as any)[key];

							return (
								<TrainerInput
									key={i}
									property={key}
									value={inputValues[key]}
									appendedString={
										stage === 'review'
											? isWordPropertiesUsingSelectInput(key)
												? isKeyInObject(value, MAPPER.extended[key]) && MAPPER.extended[key][value]
												: value
											: undefined
									}
									handleChange={(key: string, value: string) =>
										setInputValues((prevInputValues) => ({
											...prevInputValues,
											[key]: value
										}))
									}
									correct={stage === 'review' ? compareValues(inputValues[key], value) : undefined}
								/>
							);
						})}
					</div>
				)}
				<hr />
				<ActionBar handleContinue={handleContinue} progressPercentage={progressPercentage} />
			</>
		)
	);
};

export default Test;
