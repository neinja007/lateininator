import { Breakpoint, Color } from '@/types/other';

export const COLORS: { [key in Color]: { [key in 'dynamic' | 'text' | 'static']: string } } = {
  gray: {
    dynamic: 'bg-gray-500 text-white border-none hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700',
    text: 'text-gray-500',
    static: 'bg-gray-500 dark:bg-gray-800'
  },
  red: {
    dynamic: 'bg-red-500 text-white border-none hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-700',
    text: 'text-red-500',
    static: 'bg-red-500 dark:bg-red-800'
  },
  orange: {
    dynamic: 'bg-orange-500 text-white border-none hover:bg-orange-400 dark:bg-orange-800 dark:hover:bg-orange-700',
    text: 'text-orange-500',
    static: 'bg-orange-500 dark:bg-orange-800'
  },
  yellow: {
    dynamic: 'bg-yellow-500 text-white border-none hover:bg-yellow-400 dark:bg-yellow-800 dark:hover:bg-yellow-700',
    text: 'text-yellow-500',
    static: 'bg-yellow-500 dark:bg-yellow-800'
  },
  green: {
    dynamic: 'bg-green-500 text-white border-none hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-700',
    text: 'text-green-500',
    static: 'bg-green-500 dark:bg-green-800'
  },
  blue: {
    dynamic: 'bg-blue-500 text-white border-none hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-700',
    text: 'text-blue-500',
    static: 'bg-blue-500 dark:bg-blue-800'
  },
  purple: {
    dynamic: 'bg-purple-500 text-white border-none hover:bg-purple-400 dark:bg-purple-800 dark:hover:bg-purple-700',
    text: 'text-purple-500',
    static: 'bg-purple-500 dark:bg-purple-800'
  },
  pink: {
    dynamic: 'bg-pink-500 text-white border-none hover:bg-pink-400 dark:bg-pink-800 dark:hover:bg-pink-700',
    text: 'text-pink-500',
    static: 'bg-pink-500 dark:bg-pink-800'
  },
  default: {
    dynamic: 'bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800',
    text: 'text-gray-500',
    static: 'bg-white dark:bg-gray-900'
  }
};

export const availableColors = ['yellow', 'blue', 'green', 'purple', 'pink', 'orange'] as const;

export const BREAKPOINTS: { [B in Breakpoint]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

export const monthlyPrice = 5;
