export const validateNumber = (value: string): boolean => {
  if (value !== null && !/^\d+$/.test(value)) {
    return false;
  } else {
    return true;
  }
};
