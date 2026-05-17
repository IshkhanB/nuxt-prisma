import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (id) {
      const user = await prisma.user.delete({
        where: {
          id: +id
        }
      })
      return user
    }
    return null
  } catch (e) {
    console.log(e)
    return null
  }
})