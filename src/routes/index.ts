import type { FastifyInstance } from 'fastify'
import { healthRoute } from '../modules/check/check.routes.ts'

// Test Routes
const checkRoutes = (app: FastifyInstance) => {
  app.register(healthRoute)
}

export const registerRoutes = (app: FastifyInstance) => {
  app.register(checkRoutes, { prefix: '/api' })
}
