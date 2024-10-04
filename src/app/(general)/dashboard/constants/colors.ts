import { Color } from '@/types/other';

export const fancyLinkColors: { [C in Exclude<Color, 'default'>]: string & React.CSSProperties } = {
  blue: 'hover:border-blue-500 hover:bg-blue-200 dark:hover:bg-blue-950',
  green: 'hover:border-green-500 hover:bg-green-200 dark:hover:bg-green-950',
  yellow: 'hover:border-yellow-500 hover:bg-yellow-200 dark:hover:bg-yellow-900',
  orange: 'hover:border-orange-500 hover:bg-orange-200 dark:hover:bg-orange-950',
  red: 'hover:border-red-500 hover:bg-red-200 dark:hover:bg-red-950',
  pink: 'hover:border-pink-500 hover:bg-pink-200 dark:hover:bg-pink-950',
  purple: 'hover:border-purple-500 hover:bg-purple-200 dark:hover:bg-purple-950',
  gray: 'hover:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-950',
  cyan: 'hover:border-cyan-500 hover:bg-cyan-200 dark:hover:bg-cyan-950',
  lime: 'hover:border-lime-500 hover:bg-lime-200 dark:hover:bg-lime-950'
};
