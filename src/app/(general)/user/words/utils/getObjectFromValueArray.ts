export const getObjectFromValueArray = (valueArray: string[][]): Object => {
  return valueArray.reduce<Object>((acc, values) => {
    const [path, value] = [values.slice(0, -1), values[values.length - 1]];

    return path.reduce((obj: Record<string, any>, key, index) => {
      if (index === path.length - 1) {
        obj[key] = value;
      } else {
        obj[key] = obj[key] || {};
      }
      return obj[key];
    }, acc);
  }, {});
};
