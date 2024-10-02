import { APP_CONSTANTS } from '@/constants/appConstants';
import { WordProperty, WordPropertyUsingSelectInput } from '@/types/appConstants';

export const isWordPropertiesUsingSelectInput = (element: WordProperty): element is WordPropertyUsingSelectInput => {
  return APP_CONSTANTS.wordPropertiesUsingSelectInput.includes(element as WordPropertyUsingSelectInput);
};
