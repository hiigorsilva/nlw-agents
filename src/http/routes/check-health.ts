import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const checkHealthRoute: FastifyPluginCallbackZod = async app => {
  app.get(
    '/health',
    {
      schema: {
        summary: 'Health Check Route',
        description: 'Check the health status of the server',
        consumes: ['application/json'],
        tags: ['System'],
        response: {
          200: z.object({
            statusCode: z.number(),
            status: z.string(),
            message: z.string(),
          }),
        },
      },
    },
    async (_, reply) => {
      return reply.status(200).send({
        statusCode: 200,
        status: 'OK',
        message: 'Server is healthy and operational.',
      })
    }
  )
}
