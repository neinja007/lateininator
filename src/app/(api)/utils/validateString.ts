export const validateNumber = (value: string): boolean => {
  if (value !== null && !/^[a-zA-Z]+$/.test(value)) {
    return false;
  } else {
    return true;
  }
};
