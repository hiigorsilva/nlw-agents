import type { RouteShorthandOptions } from 'fastify'
import z from 'zod'

export const health: RouteShorthandOptions = {
  schema: {
    summary: 'Health Route',
    description: 'Callback route to check the health of the API',
    consumes: ['application/json'],
    tags: ['Check'],
    response: {
      200: z.object({
        status: z.string(),
      }),
    },
  },
}
