import type { RouteShorthandOptions } from 'fastify'
import z from 'zod/v4'

export const health: RouteShorthandOptions = {
  schema: {
    summary: 'Health Route',
    description: 'Callback route to check API health',
    consumes: ['application/json'],
    tags: ['Check'],
    response: {
      200: z.object({
        status: z.string(),
      }),
    },
  },
}
