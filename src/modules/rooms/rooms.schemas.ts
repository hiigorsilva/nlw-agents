import type { RouteShorthandOptions } from 'fastify'
import z from 'zod/v4'

export const rooms: RouteShorthandOptions = {
  schema: {
    summary: 'Rooms Route',
    description: 'Get all rooms',
    consumes: ['application/json'],
    tags: ['Rooms'],
    response: {
      200: z.object({
        rooms: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
          })
        ),
      }),
    },
  },
}
