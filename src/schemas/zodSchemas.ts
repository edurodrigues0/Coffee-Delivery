import * as z from 'zod'

export const checkoutFormValidationSchema = z.object({
  cep: z.string().max(9, 'Informe seu Ceo'),
  street: z.string().min(5, 'Informe sua Rua'),
  number: z.string().min(1, 'Informe seu Número'),
  complement: z.string(),
  district: z.string().min(3, 'Informe seu Bairro'),
  city: z.string().min(5, 'Informe sua Cidade'),
  state: z.string().max(2, 'Informe seu estado'),
  payment: z.enum(['debit', 'credit', 'money']),
})

export type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>
