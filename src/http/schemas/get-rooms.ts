import z from 'zod/v4'

export const getAllRoomsSchema = z.object({
  id: z.string(),
  name: z.string(),
})
