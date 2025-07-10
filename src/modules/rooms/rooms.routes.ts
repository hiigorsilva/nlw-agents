import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import * as roomsController from './rooms.controllers.ts'
import * as roomsSchema from './rooms.schemas.ts'

export const getRoomsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/rooms', roomsSchema.rooms, roomsController.rooms)
}
