export const getValueArrayFromObject = (exceptionObject: Object) =>
  Object.entries(exceptionObject || {}).reduce<string[][]>((acc, [key, value]) => {
    if (typeof value === 'string') {
      return [...acc, [key, value]];
    }

    const flatten = (obj: any, path: string[] = []): string[][] => {
      return Object.entries(obj).reduce<string[][]>((items, [k, v]) => {
        const newPath = [...path, k];
        if (typeof v === 'string') {
          return [...items, [...newPath, v]];
        }
        if (v && typeof v === 'object') {
          return [...items, ...flatten(v, newPath)];
        }
        return items;
      }, []);
    };

    return [...acc, ...flatten(value, [key])];
  }, []);
