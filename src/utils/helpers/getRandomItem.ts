export const getRandomItem = (array: any[]): any => {
  return array[Math.floor(Math.random() * array.length)];
};
