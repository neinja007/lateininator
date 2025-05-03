export const convertTranslationInputIntoArray = (input: string): string[] => {
  return input
    .split(',')
    .map((t) => t.trim())
    .filter((value, index, self) => self.indexOf(value) === index);
};
