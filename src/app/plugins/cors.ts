import { fastifyCors } from '@fastify/cors'
import type { FastifyInstance } from 'fastify'

export const registerCors = (app: FastifyInstance) => {
  app.register(fastifyCors, {
    origin: 'http://localhost:5173',
  })
}
