import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

type GetRoomsServiceResult = {
  success: boolean
  statusCode: number
  data: Array<{ id: string; name: string }> | null
  message: string
}

export const getRoomsService = async (): Promise<GetRoomsServiceResult> => {
  try {
    const rooms = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
      })
      .from(schema.rooms)
      .orderBy(schema.rooms.createdAt)

    if (rooms.length === 0) {
      return {
        success: true,
        statusCode: 200,
        data: rooms,
        message: 'No rooms have been created yet',
      }
    }

    return {
      success: true,
      statusCode: 200,
      data: rooms,
      message: 'Rooms retrieved successfully',
    }
  } catch (err) {
    console.error('GET_ROOMS_SERVICE_ERROR:', err)
    return {
      success: false,
      statusCode: 500,
      data: null,
      message: 'Failed to retrieve rooms due to an internal server error.',
    }
  }
}
