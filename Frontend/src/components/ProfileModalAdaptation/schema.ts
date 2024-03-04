import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('É necessário o nome'),
  phone: z
    .string()
    .nonempty('É necessário o telefone')
    .regex(/^\d+$/, 'O telefone só deve conter números'),
  email: z.string().nonempty().email('Email inválido'),
  password: z.string().optional(),
});

type UpdateData = z.infer<typeof schema>;

export { schema };

export type { UpdateData };
