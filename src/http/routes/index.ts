import type { FastifyInstance } from 'fastify'
import { getRoomsRoute } from './get-rooms.ts'

export const registerRoutes = (app: FastifyInstance) => {
  app.register(getRoomsRoute)
}
