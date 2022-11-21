import { z, TypeOf } from 'zod';

export const studentSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' })
    .min(3,'You name must be more than 3 char'),
    name: z
      .string({ required_error: 'name is required !' })
      .min(4, 'You name must be more than 3 char'),
    major: z.enum(["IT","IS","CS","SWE"],{ required_error: 'Major is required !' }),
      
    level: z.number({ required_error: 'level is required !' })
    .min(1, 'must be more than 1')
    .max(8, 'must be less than 8'),

    GPA: z.number({ required_error: 'GPA is required !' })
    .min(0, 'must be more than 0')
    .max(5, 'must be less than 5'),
  }),
});

export type studentSchemaType = TypeOf<typeof studentSchema>['body'];
