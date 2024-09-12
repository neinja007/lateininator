export const getIncludedData = <T extends readonly string[]>(
  includeParamData: string[],
  allowedItems: T
): { [K in T[number]]: boolean } | false => {
  if (!includeParamData.every((item) => allowedItems.includes(item))) {
    return false;
  }

  return allowedItems.reduce(
    (acc: { [K in T[number]]: boolean }, item: T[number]) => {
      acc[item] = includeParamData.includes(item);
      return acc;
    },
    {} as { [K in T[number]]: boolean }
  );
};
