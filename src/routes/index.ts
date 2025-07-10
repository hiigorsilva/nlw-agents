import type { FastifyInstance } from 'fastify'
import { healthRoute } from '../modules/check/check.routes.ts'
import { getRoomsRoute } from '../modules/rooms/rooms.routes.ts'

const checkRoutes = (app: FastifyInstance) => {
  app.register(healthRoute)
}

const roomsRoutes = (app: FastifyInstance) => {
  app.register(getRoomsRoute)
}

export const registerRoutes = (app: FastifyInstance) => {
  app.register(checkRoutes)
  app.register(roomsRoutes)
}
