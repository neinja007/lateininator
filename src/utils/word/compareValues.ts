export const compareValues = (
  input: string | string[],
  correctInput: string | string[],
  translation?: boolean
): boolean => {
  if (translation && typeof correctInput === 'object' && typeof input === 'object') {
    if (correctInput.length === 0 && input.length === 0) return true;
    return input.every((inputElement) => {
      return correctInput.some((correctInputElement) => {
        console.log(inputElement, correctInputElement);
        return compareValues(inputElement, correctInputElement);
      });
    });
  } else if (typeof correctInput === 'string' && typeof input === 'string') {
    return input.trim().toLowerCase() === correctInput.trim().toLowerCase();
  } else {
    throw new Error(
      'Error: compareValues() called with incorrect arguments: ' + JSON.stringify({ input, correctInput, translation })
    );
  }
};
