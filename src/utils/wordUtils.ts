import { APP_CONSTANTS } from '@/constants';
import { MainWordType, WordType } from '@/types';

export const transformWordTypeToMainWordType = (wordType: WordType): MainWordType | 'other' => {
  if (!APP_CONSTANTS.mainWordTypes.includes(wordType as MainWordType)) {
    return 'other';
  }
  return wordType as MainWordType;
};
