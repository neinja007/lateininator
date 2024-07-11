import Button from '@/components/Button';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { APP_CONSTANTS } from '@/constants';
import { WordProperty, WordType } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction, useEffect } from 'react';

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
	const possibleWordProperties = APP_CONSTANTS.allWordProperties.filter((property) =>
		APP_CONSTANTS.wordTypes.some(
			(type) => (APP_CONSTANTS.wordProperties[type] as any).includes(property) && typesToCheck.includes(type)
		)
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
		</>
	);
};

export default PropertySelection;
