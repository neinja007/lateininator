import { APP_CONSTANTS } from '@/constants';
import { WordType, MainWordType } from '@/types/appConstants';

export const transformWordTypeToMainWordType = (wordType: WordType): MainWordType | 'other' => {
  if (!APP_CONSTANTS.mainWordTypes.includes(wordType as MainWordType)) {
    return 'other';
  }
  return wordType as MainWordType;
};
