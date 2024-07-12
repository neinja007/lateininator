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
import TranslationInput from './test/TranslationInput';
import PropertyInputs from './test/PropertyInputs';

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
				<TranslationInput
					checkTranslation={checkTranslation}
					activeWord={activeWord}
					stage={stage}
					inputValues={inputValues}
					setInputValues={setInputValues}
				/>
				{validKeysToCheck.length > 0 && (
					<PropertyInputs
						validKeysToCheck={validKeysToCheck}
						activeWord={activeWord}
						inputValues={inputValues}
						setInputValues={setInputValues}
						stage={stage}
					/>
				)}
				<hr />
				<ActionBar handleContinue={handleContinue} progressPercentage={progressPercentage} />
			</>
		)
	);
};

export default Test;
