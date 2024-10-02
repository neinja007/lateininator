import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { WordPropertyUsingSelectInput } from '@/types/appConstants';
import { MAPPER } from '../other/mapper';
import { isWordPropertiesUsingSelectInput } from '../typeguards/isWordPropertiesUsingSelectInput';

export const generateSelectInputPropertyOptions = (property: WordPropertyUsingSelectInput) => {
  return isWordPropertiesUsingSelectInput(property)
    ? WORD_CONSTANTS.optional[property].reduce((object: { [key: string]: string }, element) => {
        object[element] = (MAPPER.extended[property] as { [key: string]: string })[element];
        return object;
      }, {})
    : {};
};
