export const isKeyInObject = <T extends object>(key: keyof any, obj: T): key is keyof T => {
  return key in obj;
};
