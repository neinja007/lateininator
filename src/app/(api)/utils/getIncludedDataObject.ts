export const getIncludedDataObject = <Type>(
  includeParamData: string[] | null,
  allowedItems: (keyof Type)[]
): { [key: string]: boolean } | false => {
  if (!includeParamData || !includeParamData.every((item) => allowedItems.includes(item as keyof Type))) {
    return false;
  }

  return allowedItems.reduce((acc: { [key: string]: boolean }, item: keyof Type) => {
    acc[item as string] = includeParamData.includes(item as string);
    return acc;
  }, {});
};
