import type { FastifyReply, FastifyRequest } from 'fastify'

export const health = (_request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send({ status: 'OK' })
}
