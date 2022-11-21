import { z, TypeOf } from 'zod';

export const movieSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' })
    .min(3,'You name must be more than 3 char'),
    name: z
      .string({ required_error: 'name is required !' })
      .min(4, 'You name must be more than 3 char'),
    genre: z.enum(["Action","Drama","Comedy"],{ required_error: 'genre is required !' }),
      
    rating: z.number({ required_error: 'rating is required !' })
    .min(1, 'must be more than 1')
    .max(5, 'must be less than 5'),

    duration: z.number({ required_error: 'duration is required !' })
    .min(60, 'Your movie must be more than 60 minutes'),
  }),
});

export type movieSchemaType = TypeOf<typeof movieSchema>['body'];
