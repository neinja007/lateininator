import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { APP_CONSTANTS } from '@/constants';
import { WordProperty, WordType } from '@/types';
import { MAPPER } from '@/utils/mapper';
import { Dispatch, SetStateAction } from 'react';

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
	return (
		<>
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
		</>
	);
};

export default PropertySelection;
