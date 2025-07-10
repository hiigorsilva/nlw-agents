import type { FastifyInstance } from 'fastify'
import { env } from '../env.ts'

export const startServer = async (app: FastifyInstance) => {
  try {
    await app.listen({
      port: env.PORT,
      host: '0.0.0.0',
    })
    console.log(`🚀 HTTP server running on port ${env.PORT}!`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
