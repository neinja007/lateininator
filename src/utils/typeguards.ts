import { APP_CONSTANTS } from '@/constants';
import { WordProperty, WordPropertiesUsingSelectInput } from '@/types';

export const isWordPropertiesUsingSelectInput = (element: WordProperty): element is WordPropertiesUsingSelectInput => {
  if (APP_CONSTANTS.wordPropertiesUsingSelectInput.includes(element as WordPropertiesUsingSelectInput)) {
    return true;
  }
  return false;
};

export function isKeyInObject<T extends object>(key: keyof any, obj: T): key is keyof T {
  return key in obj;
}
