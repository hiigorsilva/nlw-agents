import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import z from 'zod/v4'
import { getAllRoomsSchema } from '../schemas/get-rooms.ts'
import { getRoomsService } from '../services/get-rooms.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = async app => {
  app.get(
    '/rooms',
    {
      schema: {
        summary: 'Get Rooms Route',
        description: 'List all rooms available',
        consumes: ['application/json'],
        tags: ['Rooms'],
        response: {
          200: z.object({
            statusCode: z.number(),
            data: z.array(getAllRoomsSchema),
            message: z.string(),
          }),
          400: z.object({
            statusCode: z.number(),
            data: z.null(),
            message: z.string(),
          }),
        },
      },
    },
    async (_, reply) => {
      const rooms = await getRoomsService()

      if (!rooms.success) {
        return reply.status(rooms.statusCode).send({
          statusCode: rooms.statusCode,
          data: null,
          message: rooms.message,
        })
      }

      const getRoomsResponse = {
        message: rooms.message,
        statusCode: rooms.statusCode,
        data: rooms.data,
      }

      return reply.status(rooms.statusCode).send(getRoomsResponse)
    }
  )
}
