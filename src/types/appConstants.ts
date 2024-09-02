import { APP_CONSTANTS } from '@/constants/appConstants';

export type WordType = (typeof APP_CONSTANTS.wordTypes)[number];
export type MainWordType = (typeof APP_CONSTANTS.mainWordTypes)[number];
export type MainWordTypeWithOther = (typeof APP_CONSTANTS.mainWordTypesWithOther)[number];
export type WordProperty = (typeof APP_CONSTANTS.allWordProperties)[number];
export type OtherProperty = (typeof APP_CONSTANTS.otherProperties)[number];
export type WordPropertiesUsingSelectInput = (typeof APP_CONSTANTS.wordPropertiesUsingSelectInput)[number];
