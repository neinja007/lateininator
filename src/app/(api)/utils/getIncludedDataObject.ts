export const getIncludedDataObject = (
  includeParamData: string[] | null,
  allowedItems: string[]
): { [key: string]: boolean } | false => {
  if (!includeParamData || !includeParamData.every((item) => allowedItems.includes(item))) {
    return false;
  }

  return allowedItems.reduce((acc: { [key: string]: boolean }, item: string) => {
    acc[item] = includeParamData.includes(item);
    return acc;
  }, {});
};
