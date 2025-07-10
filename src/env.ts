import z, { coerce } from "zod";

const envSchema = z.object({
	PORT: coerce.number().default(3333),
});

export const env = envSchema.parse(process.env);
