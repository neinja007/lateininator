import { List } from '@/types/other';
import { generateSequentialNumbers } from '../utils/helpers/generateSequentialNumbers';

export const lists: List[] = [
  {
    id: 1,
    name: 'Lektion 1',
    words: generateSequentialNumbers(1, 33)
  },
  {
    id: 2,
    name: 'Lektion 2',
    words: generateSequentialNumbers(34, 64)
  },
  {
    id: 3,
    name: 'Lektion 3',
    words: generateSequentialNumbers(65, 91)
  },
  {
    id: 4,
    name: 'Lektion 4',
    words: generateSequentialNumbers(92, 120)
  },
  {
    id: 5,
    name: 'Lektion 5',
    words: generateSequentialNumbers(121, 161)
  },
  {
    id: 6,
    name: 'Lektion 6',
    words: generateSequentialNumbers(162, 186)
  },
  {
    id: 7,
    name: 'Lektion 7',
    words: generateSequentialNumbers(187, 215)
  },
  {
    id: 8,
    name: 'Lektion 8',
    words: generateSequentialNumbers(216, 237)
  },
  {
    id: 9,
    name: 'Lektion 9',
    words: generateSequentialNumbers(238, 265)
  },
  {
    id: 10,
    name: 'Lektion 10',
    words: generateSequentialNumbers(266, 289)
  },
  {
    id: 11,
    name: 'Lektion 11',
    words: generateSequentialNumbers(290, 319)
  },
  {
    id: 12,
    name: 'Lektion 12',
    words: generateSequentialNumbers(320, 346)
  },
  {
    id: 13,
    name: 'Lektion 13',
    words: generateSequentialNumbers(347, 367)
  },
  {
    id: 14,
    name: 'Lektion 14',
    words: generateSequentialNumbers(368, 398)
  },
  {
    id: 15,
    name: 'Lektion 15',
    words: generateSequentialNumbers(399, 431)
  },
  {
    id: 16,
    name: 'Lektion 16',
    words: generateSequentialNumbers(432, 458)
  },
  {
    id: 17,
    name: 'Lektion 17',
    words: generateSequentialNumbers(459, 490)
  },
  {
    id: 18,
    name: 'Lektion 18',
    words: generateSequentialNumbers(491, 521)
  },
  {
    id: 19,
    name: 'Lektion 19',
    words: generateSequentialNumbers(522, 547)
  },
  {
    id: 20,
    name: 'Lektion 20',
    words: generateSequentialNumbers(548, 567)
  },
  {
    id: 21,
    name: 'Lektion 21',
    words: generateSequentialNumbers(568, 591)
  }
  // { id: 22, name: 'Test', words: [72, 151, 17, 3] }
];
