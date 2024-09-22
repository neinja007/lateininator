import Button from '@/components/Button';
import CheckboxList from '@/components/CheckboxList';
import CheckboxWithLabel from '@/components/CheckboxWithLabel';
import { APP_CONSTANTS } from '@/constants/appConstants';
import { usePrimaryColor } from '@/hooks/database/queries/usePrimaryColor';
import { WordProperty, WordType } from '@/types/appConstants';
import { MAPPER } from '@/utils/other/mapper';
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

  const primaryColor = usePrimaryColor();

  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
        <p className='sm:mb-3'>Wähle aus, was abgefragt werden soll:</p>
        <div className='my-2 justify-center sm:my-0 sm:flex lg:block'>
          <CheckboxWithLabel
            checked={checkTranslation}
            handleChange={() => setCheckTranslation((prevCheckTranslation) => !prevCheckTranslation)}
            label='Übersetzung'
          />
        </div>
        <div className='grid grid-cols-2 gap-x-4 sm:col-span-2 lg:col-span-1'>
          <Button
            color={
              wordPropertiesToCheck.length === APP_CONSTANTS.allWordProperties.length && checkTranslation
                ? primaryColor
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
            color={wordPropertiesToCheck.length === 0 && !checkTranslation ? primaryColor : 'default'}
            onClick={() => {
              setWordPropertiesToCheck([]);
              setCheckTranslation(false);
            }}
          >
            Alle abwählen
          </Button>
        </div>
      </div>
      <div className='grid gap-y-3 sm:grid-cols-2 md:grid-cols-3'>
        {APP_CONSTANTS.mainWordTypes.map((type: WordType) => (
          <CheckboxList
            key={type}
            label={MAPPER.extended.type.plural[type]}
            disabled={!typesToCheck.includes(type)}
            options={[...APP_CONSTANTS.wordProperties[type]] as string[]}
            selected={wordPropertiesToCheck}
            setSelected={setWordPropertiesToCheck as Dispatch<SetStateAction<string[]>>}
            mapper={MAPPER.extended.property.singular}
          />
        ))}
      </div>
    </>
  );
};

export default PropertySelection;
