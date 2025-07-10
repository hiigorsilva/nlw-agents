import { fastify } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { registerCompilers } from './app/config/compilers.ts'
import { registerCors } from './app/plugins/cors.ts'
import { registerSwagger } from './app/plugins/swagger.ts'
import { startServer } from './app/start.ts'
import { registerRoutes } from './routes/index.ts'

// App
const app = fastify().withTypeProvider<ZodTypeProvider>()

// Configs
registerCompilers(app)

// Plugins
registerCors(app)
registerSwagger(app)

// Routes
registerRoutes(app)

// Start
startServer(app)
