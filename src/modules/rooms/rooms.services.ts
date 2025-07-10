import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getAllRooms = async () => {
  const rooms = await db
    .select({
      id: schema.rooms.id,
      name: schema.rooms.name,
    })
    .from(schema.rooms)
    .orderBy(schema.rooms.createdAt)

  return rooms
}
