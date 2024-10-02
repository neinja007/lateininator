import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { WordProperty } from '@/types/appConstants';
import { MAPPER } from '../other/mapper';
import { isWordPropertiesUsingSelectInput } from '../typeguards/isWordPropertiesUsingSelectInput';

export const generateSelectInputPropertyOptions = (property: WordProperty) => {
  return isWordPropertiesUsingSelectInput(property)
    ? WORD_CONSTANTS.optional[property].reduce((object: { [key: string]: string }, element) => {
        object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
        return object;
      }, {})
    : {};
};
