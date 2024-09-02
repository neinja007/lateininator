export const getIncludedData = (
  includeParamData: string[],
  allowedItems: string[]
): { [key: string]: true } | false => {
  if (!includeParamData.every((item) => allowedItems.includes(item))) {
    return false;
  }

  return allowedItems.reduce((acc: { [key: string]: true }, item: string) => {
    if (includeParamData.includes(item)) acc[item] = true;
    return acc;
  }, {});
};
