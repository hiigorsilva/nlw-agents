import type { FastifyInstance } from 'fastify'
import { checkHealthRoute } from './check-health.ts'
import { getRoomsRoute } from './get-rooms.ts'

export const registerRoutes = (app: FastifyInstance) => {
  app.register(checkHealthRoute)
  app.register(getRoomsRoute)
}
