import TrainerInput from '@/components/TrainerInput';
import { Stage } from '@/hooks/useStage';
import { Word, WordProperty } from '@/types';
import { compareValues } from '@/utils/inputUtils';
import { MAPPER } from '@/utils/mapper';
import { isWordPropertiesUsingSelectInput, isKeyInObject } from '@/utils/typeguards';
import { Dispatch, SetStateAction } from 'react';

type PropertyInputsProps = {
	validKeysToCheck: WordProperty[];
	activeWord: Word;
	inputValues: Record<WordProperty, string>;
	setInputValues: Dispatch<SetStateAction<Record<WordProperty | 'translation', string>>>;
	stage: Stage;
};

const PropertyInputs = ({ validKeysToCheck, activeWord, inputValues, setInputValues, stage }: PropertyInputsProps) => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			{validKeysToCheck.map((key, i) => {
				let value = (activeWord as any)[key];
				let correct = stage === 'review' ? compareValues(inputValues[key], value) : undefined;

				return (
					<TrainerInput
						key={i}
						property={key}
						value={inputValues[key]}
						appendedString={
							stage === 'review' && correct !== true
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
						correct={correct}
					/>
				);
			})}
		</div>
	);
};

export default PropertyInputs;
