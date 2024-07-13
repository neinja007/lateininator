import Button from '@/components/Button';
import CheckboxList from '@/components/CheckBoxList';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { APP_CONSTANTS } from '@/constants';
import { WordProperty, WordType } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';

type PropertySelectionProps = {
	checkTranslation: boolean;
	setCheckTranslation: Dispatch<SetStateAction<boolean>>;
	typesToCheck: WordType[];
	wordPropertiesToCheck: WordProperty[];
	setWordPropertiesToCheck: Dispatch<SetStateAction<WordProperty[]>>;
};

const PropertySelection = ({
	checkTranslation,
	setCheckTranslation,
	typesToCheck,
	wordPropertiesToCheck,
	setWordPropertiesToCheck
}: PropertySelectionProps) => {
	const possibleWordProperties = useMemo(
		() =>
			APP_CONSTANTS.allWordProperties.filter((property) =>
				APP_CONSTANTS.wordTypes.some(
					(type) => (APP_CONSTANTS.wordProperties[type] as any).includes(property) && typesToCheck.includes(type)
				)
			),
		[typesToCheck]
	);

	useEffect(() => {
		setWordPropertiesToCheck((prev) => prev.filter((property) => possibleWordProperties.includes(property)));
	}, [possibleWordProperties, setWordPropertiesToCheck, typesToCheck]);

	return (
		<>
			<div className='grid grid-cols-3'>
				<p>Wähle aus, was abgefragt werden soll:</p>
				<CheckboxWithLabel
					checked={checkTranslation}
					handleChange={() => setCheckTranslation((prevCheckTranslation) => !prevCheckTranslation)}
					label={'Übersetzung'}
				/>
				<div className='grid grid-cols-2 gap-x-4'>
					<Button
						color={
							wordPropertiesToCheck.length === APP_CONSTANTS.allWordProperties.length && checkTranslation
								? 'blue'
								: 'default'
						}
						onClick={() => {
							setWordPropertiesToCheck(possibleWordProperties);
							setCheckTranslation(true);
						}}
					>
						Alle auswählen
					</Button>
					<Button
						color={wordPropertiesToCheck.length === 0 && !checkTranslation ? 'blue' : 'default'}
						onClick={() => {
							setWordPropertiesToCheck([]);
							setCheckTranslation(false);
						}}
					>
						Alle abwählen
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-3'>
				{APP_CONSTANTS.mainWordTypes.map((type: WordType) => (
					<CheckboxList
						key={type}
						label={MAPPER.extended.type[type]}
						disabled={!typesToCheck.includes(type)}
						options={[...APP_CONSTANTS.wordProperties[type]] as string[]}
						selected={wordPropertiesToCheck}
						setSelected={setWordPropertiesToCheck as Dispatch<SetStateAction<string[]>>}
						mapper={MAPPER.extended.property}
					/>
				))}
			</div>
		</>
	);
};

export default PropertySelection;
