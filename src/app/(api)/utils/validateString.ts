export const validateString = (value: string | null): boolean => {
  if (value !== null && !/^[a-zA-Z]+$/.test(value)) {
    return false;
  } else {
    return true;
  }
};
