import { Breakpoint, Color } from '@/types/other';

export const COLORS: { [C in Color]: React.CSSProperties & string } = {
  gray: 'bg-gray-500 text-white border-none hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700',
  red: 'bg-red-500 text-white border-none hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-700',
  orange: 'bg-orange-500 text-white border-none hover:bg-orange-400 dark:bg-orange-800 dark:hover:bg-orange-700',
  yellow: 'bg-yellow-500 text-white border-none hover:bg-yellow-400 dark:bg-yellow-800 dark:hover:bg-yellow-700',
  green: 'bg-green-500 text-white border-none hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-700',
  blue: 'bg-blue-500 text-white border-none hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-700',
  purple: 'bg-purple-500 text-white border-none hover:bg-purple-400 dark:bg-purple-800 dark:hover:bg-purple-700',
  pink: 'bg-pink-500 text-white border-none hover:bg-pink-400 dark:bg-pink-800 dark:hover:bg-pink-700',
  default: 'bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
};

export const BREAKPOINTS: { [B in Breakpoint]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
