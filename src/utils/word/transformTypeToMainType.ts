import { APP_CONSTANTS } from '@/constants/appConstants';
import { WordType, MainWordType, MainWordTypeWithOther } from '@/types/appConstants';

export const transformTypeToMainType = (wordType: WordType): MainWordTypeWithOther => {
  if (!APP_CONSTANTS.mainWordTypes.includes(wordType as MainWordType)) {
    return 'OTHER';
  }
  return wordType as MainWordType;
};
