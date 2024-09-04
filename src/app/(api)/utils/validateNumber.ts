export const validateNumber = (value: string | null): boolean => {
  if (value !== null && !/^\d+$/.test(value)) {
    return false;
  } else {
    return true;
  }
};
