import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import * as checkController from './check.controllers.ts'
import * as checkSchema from './check.schemas.ts'

export const healthRoute: FastifyPluginAsyncZod = async app => {
  app.get('/health', checkSchema.health, checkController.health)
}
