import { APP_CONSTANTS } from '@/constants';
import { WordProperty, WordPropertiesUsingSelectInput } from '@/types/app_constants';

export const isWordPropertiesUsingSelectInput = (element: WordProperty): element is WordPropertiesUsingSelectInput => {
  return APP_CONSTANTS.wordPropertiesUsingSelectInput.includes(element as WordPropertiesUsingSelectInput);
};
