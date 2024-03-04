import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty().email('Email inválido'),
  password: z.string().nonempty('É necessário senha'),
});

type DataLogin = z.infer<typeof schema>;

export { schema };

export type { DataLogin };
