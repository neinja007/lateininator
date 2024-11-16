import { WordType } from '@/types/appConstants';
import { Breakpoint, Color, Pattern } from '@/types/other';

export const mapTypeToColor: { [key in WordType]: Color } = {
  NOUN: 'blue',
  VERB: 'red',
  ADJECTIVE: 'green',
  ADVERB: 'gray',
  PRONOUN: 'gray',
  OTHER: 'gray'
};

export const COLORS: { [key in Color]: { [key in 'dynamic' | 'text' | 'static' | 'hex']: string } } = {
  gray: {
    dynamic: 'bg-gray-500 text-white border-none hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700',
    text: 'text-gray-500',
    static: 'bg-gray-300 border dark:border-gray-700 border-gray-500 dark:bg-gray-800',
    hex: '#6b7280'
  },
  red: {
    dynamic: 'bg-red-500 text-white border-none hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-700',
    text: 'text-red-500',
    static: 'bg-red-300 border dark:border-red-700 border-red-500 dark:bg-red-800',
    hex: '#ef4444'
  },
  orange: {
    dynamic: 'bg-orange-500 text-white border-none hover:bg-orange-400 dark:bg-orange-800 dark:hover:bg-orange-700',
    text: 'text-orange-500',
    static: 'bg-orange-300 border dark:border-orange-700 border-orange-500 dark:bg-orange-800',
    hex: '#f97316'
  },
  yellow: {
    dynamic: 'bg-yellow-500 text-white border-none hover:bg-yellow-400 dark:bg-yellow-800 dark:hover:bg-yellow-700',
    text: 'text-yellow-500',
    static: 'bg-yellow-300 border dark:border-yellow-700 border-yellow-500 dark:bg-yellow-800',
    hex: '#eab308'
  },
  green: {
    dynamic: 'bg-green-500 text-white border-none hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-700',
    text: 'text-green-500',
    static: 'bg-green-300 border dark:border-green-700 border-green-500 dark:bg-green-800',
    hex: '#22c55e'
  },
  blue: {
    dynamic: 'bg-blue-500 text-white border-none hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-700',
    text: 'text-blue-500',
    static: 'bg-blue-300 border dark:border-blue-700 border-blue-500 dark:bg-blue-800',
    hex: '#3b82f6'
  },
  purple: {
    dynamic: 'bg-purple-500 text-white border-none hover:bg-purple-400 dark:bg-purple-800 dark:hover:bg-purple-700',
    text: 'text-purple-500',
    static: 'bg-purple-300 border dark:border-purple-700 border-purple-500 dark:bg-purple-800',
    hex: '#a855f7'
  },
  pink: {
    dynamic: 'bg-pink-500 text-white border-none hover:bg-pink-400 dark:bg-pink-800 dark:hover:bg-pink-700',
    text: 'text-pink-500',
    static: 'bg-pink-300 border dark:border-pink-700 border-pink-500 dark:bg-pink-800',
    hex: '#ec4899'
  },
  default: {
    dynamic: 'bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800',
    text: 'text-gray-500',
    static: 'bg-white border border-gray-200 dark:bg-gray-900',
    hex: '#fafafa'
  },
  cyan: {
    dynamic: 'bg-cyan-500 text-white border-none hover:bg-cyan-400 dark:bg-cyan-800 dark:hover:bg-cyan-700',
    text: 'text-cyan-500',
    static: 'bg-cyan-400 border dark:border-cyan-700 border-cyan-500 dark:bg-cyan-800',
    hex: '#06b6d4'
  },
  lime: {
    dynamic: 'bg-lime-500 text-white border-none hover:bg-lime-400 dark:bg-lime-800 dark:hover:bg-lime-700',
    text: 'text-lime-500',
    static: 'bg-lime-400 border dark:border-lime-700 border-lime-500 dark:bg-lime-800',
    hex: '#84cc16'
  }
};

export const availableColors = [
  'yellow',
  'blue',
  'green',
  'purple',
  'pink',
  'orange',
  'red',
  'cyan',
  'lime'
] as Color[];

export const BREAKPOINTS: { [B in Breakpoint]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

export const fullPatterns: Pattern[] = ['isometric', 'dotted'];

export const monthlyPrice = 5;

export const exceptionStructure = {
  NOUN: ['numerus', 'wordCase'],
  VERB: ['modus', 'voice', 'tense', 'numerus', 'person'],
  ADJECTIVE: ['gender', 'comparisonDegree', 'numerus', 'wordCase']
};
