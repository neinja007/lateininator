export const compareValues = (input: string, correctInput: string | string[], translation?: boolean): boolean => {
  if (translation && typeof correctInput === 'object') {
    if (correctInput.length === 0 && !input.trim()) return true;
    return input.split(',').some((translation) => {
      return correctInput.some((correctInput) => {
        return compareValues(translation, correctInput);
      });
    });
  } else if (typeof correctInput === 'string') {
    return input.trim().toLowerCase() === correctInput.trim().toLowerCase();
  } else {
    throw new Error(
      'Error: compareValues() called with incorrect arguments: ' + JSON.stringify({ input, correctInput })
    );
  }
};
