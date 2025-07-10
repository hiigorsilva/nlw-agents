import z, { coerce } from 'zod'

const envSchema = z.object({
  PORT: coerce.number().default(3333),
  DATABASE_URL: z.url().startsWith('postgresql://'),
})

export const env = envSchema.parse(process.env)
