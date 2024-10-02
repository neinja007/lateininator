import { z } from 'zod';

export const collectionSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1),
  description: z.string(),
  private: z.boolean(),
  lists: z.array(z.object({ name: z.string().min(1), words: z.array(z.number()) }))
});

export type CollectionSchema = z.infer<typeof collectionSchema>;
