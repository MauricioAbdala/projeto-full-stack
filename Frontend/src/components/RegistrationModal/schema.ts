import { z } from 'zod';

const schema = z
  .object({
    name: z.string().nonempty('É necessário o nome'),
    phone: z
      .string()
      .nonempty('É necessário o telefone')
      .regex(/^\d+$/, 'O telefone só deve conter números'),
    email: z.string().email('Email inválido').nonempty('É necessário email'),
    password: z
      .string()
      .nonempty('Senha requerida')
      .min(6, 'A senha deve conter pelo menos 6 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
      ),
    confirmPassword: z.string().nonempty('Por favor confirme sua senha'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type RegisterData = z.infer<typeof schema>;

export { schema };

export type { RegisterData };
