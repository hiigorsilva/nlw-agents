import type { FastifyReply, FastifyRequest } from 'fastify'
import { getAllRooms } from './rooms.services.ts'

export const rooms = async (_request: FastifyRequest, reply: FastifyReply) => {
  const rooms = await getAllRooms()

  return reply.status(200).send({ rooms: rooms })
}
