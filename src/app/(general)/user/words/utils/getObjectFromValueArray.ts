export const getObjectFromValueArray = (arrays: string[][]): Object => {
  return arrays.reduce((result, path) => {
    const pathParts = path.slice(0, -1);
    const value = path[path.length - 1];

    let current: Record<string, any> = result;

    pathParts.forEach((key, index) => {
      if (index === pathParts.length - 1) {
        current[key] = current[key] || {};
        current[key][value] = value;
      } else {
        current[key] = current[key] || {};
        current = current[key];
      }
    });

    return result;
  }, {});
};
