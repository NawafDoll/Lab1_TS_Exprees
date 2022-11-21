import { z, TypeOf } from 'zod';

export const bankSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' })
    .min(3,'You name must be more than 3 char'),
    userName: z
      .string({ required_error: 'name is required !' })
      .min(4, 'You name must be more than 3 char'),
    // major: z.enum(["IT","IS","CS","SWE"],{ required_error: 'Major is required !' }),
      
    password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, "Must be at least 8 characters in length"),

    balance: z.number({ required_error: 'Balance is required !' })
    .min(0, 'must be more than 0'),
  }),
});

export type bankSchemaType = TypeOf<typeof bankSchema>['body'];