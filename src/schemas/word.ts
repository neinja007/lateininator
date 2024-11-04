import { APP_CONSTANTS } from '@/constants/appConstants';
import { WORD_CONSTANTS } from '@/constants/wordConstants';
import { z } from 'zod';

export const wordSchema = z.object({
  name: z.string().min(1),
  type: z.enum(APP_CONSTANTS.wordTypes as [string, ...string[]]),
  translation: z.array(z.string().min(1)),
  info: z.string().optional(),
  derivativeId: z.number().optional(),
  exception: z.string().optional(),

  noun: z
    .object({
      pluralOnly: z.boolean(),
      declension: z.enum(WORD_CONSTANTS.optional.declension as [string, ...string[]]),
      genitive: z.string(),
      gender: z.enum(WORD_CONSTANTS.optional.gender as [string, ...string[]])
    })
    .optional(),

  verb: z
    .object({
      conjugation: z.enum(WORD_CONSTANTS.optional.conjugation as [string, ...string[]]),
      present: z.string(),
      perfect: z.string(),
      participle: z.string()
    })
    .optional(),

  adjective: z
    .object({
      comparison: z.enum(WORD_CONSTANTS.optional.comparison as [string, ...string[]]),
      femininum: z.string(),
      neutrum: z.string()
    })
    .optional()
});

export type WordSchema = z.infer<typeof wordSchema>;
